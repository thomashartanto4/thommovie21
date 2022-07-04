import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
        <Navbar variant="dark">
        <Container>
            <Navbar.Brand href="/"><div className="titlenav">THOM MOVIE21</div></Navbar.Brand>
            <Nav>
                <Nav.Link href="#trending"><div className="titlenav">TRENDING</div></Nav.Link>
                <Nav.Link href="#indo"><div className="titlenav">INDO</div></Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        </div>
    ) 
}
export default NavigationBar