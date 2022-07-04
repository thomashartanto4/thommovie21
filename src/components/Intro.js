import { Col, Container, Row, Button } from "react-bootstrap"
const Intro = () =>{
    return(
        <div className="intro">
        <Container className="text-white d-flex justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">THOM MOVIE21</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark" href="#allmovies">List Movie</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro