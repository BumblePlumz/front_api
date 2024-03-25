import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Effectue une requête API pour récupérer la liste des utilisateurs
        // et met à jour le state "users"
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    const createUser = (user: User) => {
        // Effectue une requête API pour créer un nouvel utilisateur
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                // Ajoute le nouvel utilisateur à la liste des utilisateurs
                setUsers([...users, data]);
            })
            .catch(error => console.error(error));
    };

    const updateUser = (user: User) => {
        // Effectue une requête API pour mettre à jour un utilisateur existant
        fetch(`/api/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                // Met à jour les informations de l'utilisateur dans la liste des utilisateurs
                setUsers(users.map(u => (u.id === data.id ? data : u)));
            })
            .catch(error => console.error(error));
    };

    const deleteUser = (userId: number) => {
        // Effectue une requête API pour supprimer un utilisateur
        fetch(`/api/users/${userId}`, {
            method: 'DELETE',
        })
            .then(() => {
                // Supprime l'utilisateur de la liste des utilisateurs
                setUsers(users.filter(u => u.id !== userId));
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>User Page</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <form
                // onSubmit={event => {
                //     event.preventDefault();
                //     const user = {
                //         id: Date.now(),
                //         name: event.target.name.value,
                //         email: event.target.email.value,
                //     };
                //     createUser(user);
                //     event.target.reset();
                // }}
            >
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default UserPage;