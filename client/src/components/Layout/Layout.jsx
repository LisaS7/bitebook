import { Outlet } from "react-router-dom";
import CustomNavbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
