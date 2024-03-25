import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";

const UserLayout: React.FC = () => {
  // Get the token from the loader data
  const token = useLoaderData();

  // Get the submit function
  const submit = useSubmit();

  // If the token is set, set a timeout to logout the user after 1 hour
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { method: "POST", action: "/logout"});
      return;
    }
    setTimeout(() => {
      submit(null, { method: "POST", action: "/logout"});
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <MainNavigation admin={false} />
      <main>
        {/* <SideNavigation /> */}
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
