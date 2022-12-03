import React, { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Dropdown, Navbar, Nav, Button } from 'react-bootstrap';

function Header() {
    const auth = useContext(AuthContext);
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Food Waste Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/donate">Donate</Nav.Link>
                    <Nav.Link href="/editprofile">Profile edit</Nav.Link>
                    <Nav.Link href="/contributors">Contributors</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
                <Nav >
                    {!auth.isLoggedIn && (<a href="/login"><Button variant="danger">Login</Button></a>)}
                    {!auth.isLoggedIn && (<a href="/signup"><Button variant="danger">SignUp</Button></a>)}
                    {auth.isLoggedIn && <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Profile
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/viewprofile">View Profile</Dropdown.Item>
                            <Dropdown.Item href="/userdonfood">Donated Food</Dropdown.Item>
                            <Dropdown.Item href="/userrecfood">Received Food</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                    {auth.isLoggedIn && (
                        <a><Button variant="danger" onClick={auth.logout}>Logout</Button></a>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;