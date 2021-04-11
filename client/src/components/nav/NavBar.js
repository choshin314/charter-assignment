import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/NavBar'
import SearchBar from './SearchBar'

import './NavBar.css'
import logo from '../../images/spectrumLogo.png'

function NavBar() {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img 
                            src={logo} 
                            height="30" 
                            className="d-inline-block align-top"
                            alt="Spectrum Logo"
                        />
                    </Link>
                </Navbar.Brand>
                <SearchBar />
            </Container>
        </Navbar>
    )
}

export default NavBar