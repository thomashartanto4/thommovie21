import { Container, Row, Col, Card, Image } from "react-bootstrap"
import minionImage from "../asset/image/trending/minion.jpg"
import thorImage from "../asset/image/trending/thor.jpg"
import jurrasicImage from "../asset/image/trending/jurrasic.jpg"


const Trending = () => {
    return(
    <div>
        <Container>
            <br/>
            <h1 className="text-white text-center" id="trending">TRENDING MOVIES</h1>
            <Row>
                <Col md={4} className="movieImage p-4">
                <Card className="text-white movieImage bg-dark">
                <Image src={minionImage} alt="Minion image"/>
                <div className="p-2 m-1 bg-dark">
                <Card.Title className="text-center">MINION</Card.Title>
                <Card.Text className="text-left">
                This is a wider card with supporting text.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>

                <Col md={4} className="movieImage p-4">
                <Card className="text-white movieImage bg-dark">
                <Image src={thorImage} alt="Thor Image"/>
                <div className="p-2 m-1" >
                <Card.Title className="text-center">THOR</Card.Title>
                <Card.Text className="text-left">
                This is a wider card with supporting text.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>

                <Col md={4} className="movieImage p-4">
                <Card className="text-white movieImage bg-dark">
                <Image src={jurrasicImage} alt="Jurassic image"/>
                <div className="p-1 m-1">
                <Card.Title className="text-center">Jurassic World</Card.Title>
                <Card.Text className="text-left">
                This is a wider card with supporting text.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>

            </Row>
        </Container>
        
        </div>
    )
}

export default Trending