import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";
import classes from "./AuthForm.module.css";

const AuthForm: React.FC = () => {
  const data: any = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" className={classes.form}>
      <h1>{isLogin ? "Se connecter" : "Inscription"}</h1>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err: any) => (
            <li key={err}>{data.errors[err]}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="login">Pseudo</label>
        <input
          id="login"
          type="text"
          name="login"
          required
          autoComplete="true"
        />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <Link
          to={`?mode=${isLogin ? "inscription" : "login"}`}
          className={classes.actions}
        >
          {isLogin ? "Inscription" : "Connexion"}
        </Link>
        <button disabled={isSubmitting}>
          {isSubmitting ? "En cours..." : "Go !"}
        </button>
      </div>
    </Form>
  );
};

export default AuthForm;
