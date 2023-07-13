import NavBar from "../page/navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
