import { Container, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Home(){
    return (
        <>
        
        <Container className='d-flex justify-content-center'>
            <h1>Welcome to Club Item Booking</h1>
        </Container>
        <Container className='d-flex justify-content-center'>
                <Button to={'/admin'} as={NavLink} style={{'marginRight': '10px'}}>Admin Login</Button>
                <Button to={'/user'} as={NavLink} style={{'marginRight': '10px'}}>User Login</Button>
        </Container>
        </>
    )
}