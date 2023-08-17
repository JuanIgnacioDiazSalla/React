import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MiCarrito from '../CartWidget/CartWidget'

function MiNavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#inicio">Tienda De Videojuegos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#consolas">Consolas</NavDropdown.Item>
                            <NavDropdown.Item href="#computadoras">
                                Computadoras
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#perifericos">Perifericos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#todos">
                                Todos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <MiCarrito />
        </Navbar>
    );
}

export default MiNavBar