import {Nav,Container,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import {Badge} from 'react-bootstrap';
function Navbar1(){
    return(
        <div>
          <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav style={{display:"flex", gap:"20px", fontSize:"2rem"}}>
          <Link to="/home">Home</Link>
           <Link to="/product">Product</Link>
           <Link to="/cart"><FaShoppingCart /><Badge>0</Badge></Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
    )
}
export default Navbar1;