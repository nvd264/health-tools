import Header from "./Header";
import { Container } from 'react-bootstrap';
import mainLayoutStyles from '../../../styles/main-layout.scss';

const Layout = props => (
  <React.Fragment>
    <Header />
    <Container className={mainLayoutStyles.container}>
      {props.children}
    </Container>
  </React.Fragment>
);

export default Layout;