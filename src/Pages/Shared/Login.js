import { Form, Nav, Button, Container} from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Login(){
    return (
        <>
            <Container className="m-10 pb-10">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button to={'home'} as={NavLink} style={{'marginRight': '10px'}}>Login</Button>
                </Form>
            </Container>
        </>
      );
}
