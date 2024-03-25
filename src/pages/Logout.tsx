import { redirect } from "react-router-dom";

export function action() {
  localStorage.removeItem("token");
  localStorage.removeItem("admin");
  localStorage.removeItem("expiration");
  return redirect("/");
}
