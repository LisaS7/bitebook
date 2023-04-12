import { Outlet } from "react-router-dom";
import CustomNavbar from "./Navbar";
import { MainContainer } from "./style";

export default function Layout() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}
