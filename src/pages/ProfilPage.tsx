import { useState } from 'react';

const ProfilPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Ajoutez ici la logique pour mettre à jour les informations de l'utilisateur
        console.log('Nom:', name);
        console.log('Email:', email);
        console.log('Mot de passe:', password);
    };

    return (
        <div>
            <h1>Profil</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom:</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Mot de passe:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Mettre à jour</button>
            </form>
        </div>
    );
};

export default ProfilPage;