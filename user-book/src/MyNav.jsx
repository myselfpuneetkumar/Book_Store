import { Navbar , Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function MyNav() {
    return (
        <Container fluid>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Book Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                        <Nav.Link href='/about'>About  Us</Nav.Link>
                    </Nav>
                </Container>

            </Navbar>
        </Container>
    )
}
export default MyNav