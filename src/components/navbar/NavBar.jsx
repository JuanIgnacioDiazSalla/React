import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MiCarrito from '../cartwidget/CartWidget';
import { Link } from 'react-router-dom';

function MiNavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary miNavBar">
            <Container>
                <Navbar.Brand className='tituloNavBar'><Link to="/">Tienda de Ejemplo</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/category/electronics">Tecnología</Link></Nav.Link>
                        <NavDropdown title="Ropa" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/category/men's clothing">Hombre</Link></NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/category/women's clothing">mujer</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/jewelery & bags">Accesorios</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <MiCarrito />
        </Navbar>
    );
}

export default MiNavBar