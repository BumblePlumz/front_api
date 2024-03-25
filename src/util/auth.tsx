import { redirect } from "react-router-dom";

export function getTokenDuration(): number {
  const storedExpiration = localStorage.getItem("expiration");
  let duration = -1;
  if (storedExpiration !== null) {
    const expirationDate = new Date(storedExpiration);
    const now = new Date();
    duration = expirationDate.getTime() - now.getTime();
  }
  return duration;
}

export function getAuthToken(): string | null {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration <= 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokenLoader(): string | null {
  return getAuthToken();
}

export function checkAuthLoader(): any {
  const token = getAuthToken();
  if (!token) {
    return redirect("/Authentification?mode=login");
  }
}
