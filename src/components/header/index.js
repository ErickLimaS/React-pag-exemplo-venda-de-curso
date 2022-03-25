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
                            <Nav.Link href='#'>Preços</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Stack direction='horizontal' gap={4}>
                <div className=''><a href='#'>Logo do Curso</a></div>
                <div className=' ms-auto'><a href='#'>Quem Somos</a></div>
                <div className=''><a href='#'>Preços</a></div>
            </Stack> */}
        </div>
    )
}