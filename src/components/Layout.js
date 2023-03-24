import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

export function Layout(){
    return (
      <>
        <NavBar />
        <Container className="mb-4">
            <Outlet />
        </Container>
      </>
    );
};