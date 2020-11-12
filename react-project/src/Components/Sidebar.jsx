import React from "react";
import {Button, Nav, Navbar, Form} from "react-bootstrap";


const Sidebar = props => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Our project</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#sessions">Сессии</Nav.Link>
                <Nav.Link href="#clients">Клиенты</Nav.Link>
            </Nav>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Elena Matzuk</a>
                </Navbar.Text> {' '}
                <Button variant="outline-light">Выйти</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}
    export default Sidebar;

