import { Container, Nav, Navbar, NavbarBrand, Stack } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import './styles.css'
import { GiJapan } from 'react-icons/gi'

export const Header = () => {
    return (
        <div className='header-div'>
            <Navbar expand='md' fixed='top'>
                <Container>
                    <Navbar.Brand href='#'><GiJapan fill='red' size={'35'}/> Japonês Online</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='#'>Sobre o Curso</Nav.Link>
                            <Nav.Link href='#'>Etapas de Estudo</Nav.Link>
                            <Nav.Link href='#prices'>Preços</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}