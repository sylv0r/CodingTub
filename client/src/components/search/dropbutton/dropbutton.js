import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import "./dropbutton.scss";
import data from "../../../../../server/recherche/query/filtre/dateajout";

function Filtre() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" className='Navbar1'>
      <Container fluid>

        <Navbar.Toggle aria-controls="navbar-dark-example" className='toggle' />

        <Navbar.Collapse                                                                                                                                                                                                            id="navbar-dark-example" className='collapse'>
          <Nav>
            <NavDropdown id="filtre" title="Filtre" menuVariant="dark">

              <NavDropdown id="date" title="date" menuVariant='dark'>
                

                <NavDropdown.Item href={data}>plus récente</NavDropdown.Item>
                <NavDropdown.Item href={data}>moins récente</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown id="vue" title="par vue" menuVariant="dark">

                <NavDropdown.Item href="">plus vue</NavDropdown.Item>
                <NavDropdown.Item href="">moins vue</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown id="type" title="type" menuVariant="dark">

                <NavDropdown.Item href="">chaine</NavDropdown.Item>
                <NavDropdown.Item href="">video</NavDropdown.Item>
              </NavDropdown>

            </NavDropdown>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default Filtre;