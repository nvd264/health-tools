import Link from 'next/link';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import navStyles from '../../../styles/nav.scss';

const NavBar = () => (
  <Navbar fixed="top" bg="light" expand="lg" className={navStyles.navbar}>
  <Navbar.Brand className={navStyles.logo}>
    <Link href="/">
      <a>Health Tools</a>
    </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link href="/bmi">
        <a className="nav-link">BMI</a>
      </Link>
      <Link href="/calories">
        <a className="nav-link">Calories</a>
      </Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
);

export default NavBar;