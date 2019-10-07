import React from 'react';
import {
    Nav, NavItem, Container, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

export const MainLayout = (props) => (
    <Container className="container--main">
            <Nav className="nav--top">
                {routes.map((r, index) => (
                    <NavItem key={index}>
                        <Link to={r.path}>{r.name}</Link>
                    </NavItem>
                ))}
            </Nav>
            <Row>
                {props.children}
            </Row>
    </Container>
);
