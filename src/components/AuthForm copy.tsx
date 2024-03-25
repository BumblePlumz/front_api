import { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./AuthForm.module.css";

interface AuthFormProps {
  // Add any props you need for the AuthForm component
}

const AuthForm: React.FC<AuthFormProps> = () => {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }

  return (
    <Form method="post" className={classes.form}>
      <h1>{isLogin ? "Se connecter" : "Inscription"}</h1>
      <p>
        <label htmlFor="login">Login</label>
        <input id="login" type="text" name="login" required />
      </p>
      <p>
        <label htmlFor="image">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <button onClick={switchAuthHandler} type="button">
          {isLogin ? "Inscription" : "Connexion"}
        </button>
        <button>Go !</button>
      </div>
    </Form>
  );
};

export default AuthForm;
