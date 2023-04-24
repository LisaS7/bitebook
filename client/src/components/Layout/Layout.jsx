import { Outlet } from "react-router-dom";
import CustomNavbar from "./Navbar";
import { MainContainer } from "./global-style";
import Loading from "./Loading";

export default function Layout() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <MainContainer>
        <Loading />
        <Outlet />
      </MainContainer>
    </>
  );
}
