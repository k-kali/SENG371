import { Container, Navbar as NavbarBs, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"


export function NavBar() {
    return (
        <NavbarBs className="bg-primary shadow-lg mb-3">
            <Container>
                <Nav>
                    <Nav.Link to={"home"} as={NavLink} >
                        <Container className="px-4 ">
                            <h4 className="text-light">Home</h4>
                        </Container>
                    </Nav.Link>

                    <Nav.Link to={"equipment"} as={NavLink}>
                        <Container className="px-4">
                            <h4 className="text-light">Equipment</h4>
                        </Container>
                    </Nav.Link>

                    <Nav.Link to={"rooms"} as={NavLink}>
                        <Container className="px-4">
                            <h4 className="text-light">Rooms</h4>
                        </Container>
                    </Nav.Link>

                    <Nav.Link to={"bookings"} as={NavLink}>
                        <Container className="px-4">
                            <h4 className="text-light">Manage Bookings</h4>
                        </Container>
                    </Nav.Link>

                </Nav>
                <Button>Log Out</Button>
            </Container>
        </NavbarBs>
    )
}