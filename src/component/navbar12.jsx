import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function Navbar12(props) {
  const {newmoviesList,filterC,filterD,filterA,filterH,filterF,showall}=props
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      
      <Link to="/home"> <button onClick={showall} className="btn btn-outline-dark"><Badge className='mx-3' bg="secondary">{{newmoviesList}.length}</Badge>All Movies</button></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                  <Link to="/home"> <li><button className="btn btn-outline-dark" onClick={()=>filterC()}><Badge bg="secondary">{(newmoviesList.filter(val=>val.genre=="Comedy").length)}</Badge>Comedy</button></li></Link>
                  <Link to="/home"> <li><button className="btn btn-outline-dark"  onClick={()=>filterD()}><Badge bg="secondary">{(newmoviesList.filter(val=>val.genre=="Drama").length)}</Badge>Drama</button></li></Link>
                  <Link to="/home"> <li><button className="btn btn-outline-dark" onClick={()=>filterA()}><Badge bg="secondary">{(newmoviesList.filter(val=>val.genre=="Action").length)}</Badge>Action</button></li></Link>
                  <Link to="/home"><li><button className="btn btn-outline-dark" onClick={()=>filterH()}><Badge bg="secondary">{(newmoviesList.filter(val=>val.genre=="Horror").length)}</Badge>Horror</button></li></Link>
                  <Link to="/home"><li><button className="btn btn-outline-dark" onClick={()=>filterF()}><Badge bg="secondary">{(newmoviesList.filter(val=>val.genre=="Fantasy").length)}</Badge>Fantasy</button></li></Link>
            
            
            
            
       
          </Nav>
          <Form className="d-flex">
            
            
          <Link to='/addmovie'><button className="btn btn-outline-success">Add movie to the list!</button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar12;