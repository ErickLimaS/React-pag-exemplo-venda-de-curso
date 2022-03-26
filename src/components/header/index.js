import { Container, Nav, Navbar, NavbarBrand, Stack } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import './styles.css'

export const Header = () => {
    return (
        <div className='header-div'>
            <Navbar expand='md' fixed='top'>
                <Container>
                    <Navbar.Brand href='#'>Logo do Curso</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='#'>Quem Somos</Nav.Link>
                            <Nav.Link href='#precos'>Preços</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    
        </div>
    )
}