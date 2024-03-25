import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

const AuthenticationPage: React.FC = () => {
  return <AuthForm />;
};

export default AuthenticationPage;

export async function action({
  request,
}: {
  request: Request;
}): Promise<Response | void> {
  // Get the mode (login/signin) from the URL query parameters
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "inscription") {
    throw json({ message: "Invalid mode" }, 422);
  }

  const data = await request.formData();
  const formData = new FormData();
  formData.append("login", data.get("login") as string);
  formData.append("password", data.get("password") as string);

  const response = await fetch("http://127.0.0.1:8000/" + mode, {
    method: "POST",
    body: formData,
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  localStorage.setItem("token", resData.token);
  localStorage.setItem("admin", resData.admin);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/Accueil");
}
