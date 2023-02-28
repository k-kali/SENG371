import { Container, Navbar as NavbarBs, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"


export function NavBar() {
    return (
        <NavbarBs className="bg-primary shadow-lg mb-3">
            <Container>
                <Nav>
                    <Nav.Link to={"/"} as={NavLink} >
                        <Container className="px-4 ">
                            <h4 className="text-light">Home</h4>
                        </Container>
                    </Nav.Link>

                    <Nav.Link to={"/currentbookings"} as={NavLink}>
                        <Container className="px-4">
                            <h4 className="text-light">Current Bookings</h4>
                        </Container>
                    </Nav.Link>

                    <Nav.Link to={"/findbookings"} as={NavLink}>
                        <Container className="px-4">
                            <h4 className="text-light">Find Bookings</h4>
                        </Container>
                    </Nav.Link>

                    <Nav.Link to="/managebookings" as={NavLink}>
                        <Container className="px-4">
                            <h4 className="text-light">Manage Bookings</h4>
                        </Container>
                    </Nav.Link>

                    <Nav.Link to="/managedatabase" as={NavLink}>
                        <Container className="px-4">
                            <h4 className="text-light">Manage Database</h4>
                        </Container>
                    </Nav.Link>
                </Nav>
                <Button>Log Out</Button>
            </Container>
        </NavbarBs>
    )
}