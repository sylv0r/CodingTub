import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./dropbutton.scss";


function Filtre() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" className='Navbar1'>
      <Container fluid>



        <Navbar.Collapse id="navbar-dark-example" className='collapse'>
          <Nav>
            <NavDropdown id="filtre" title="Filtre" menuVariant="dark" className='Filtre'>

              <NavDropdown id="date" title="date" menuVariant='dark'>
              
                <NavDropdown.Item id ="DateSup">plus récente</NavDropdown.Item>
                <NavDropdown.Item id="Dateinf">moins récente</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown id="vue" title="par vue" menuVariant="dark">

                <NavDropdown.Item id ="moreview">plus vue</NavDropdown.Item>
                <NavDropdown.Item id="lessview">moins vue</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown id="type" title="type" menuVariant="dark">

                <NavDropdown.Item id="chaine">chaine</NavDropdown.Item>
                <NavDropdown.Item id="video">video</NavDropdown.Item>
              </NavDropdown>

            </NavDropdown>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default Filtre;