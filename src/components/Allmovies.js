import { Container, Row, Col, Card, Image } from "react-bootstrap"
import madumurniImage from "../asset/image/indo/madumurni.jpg"
import ngeringerisedapImage from "../asset/image/indo/ngeringerisedap.jpg"
import ranah3warnaImage from "../asset/image/indo/ranah3warna.jpg"
import minionImage from "../asset/image/trending/minion.jpg"
import thorImage from "../asset/image/trending/thor.jpg"
import jurrasicImage from "../asset/image/trending/jurrasic.jpg"


const Allmovies = () => {
    return(
    <div>
        <Container>
            <br/>
            <h1 className="text-white text-center" id="allmovies">ALL MOVIES</h1>
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

                <Col md={4} className="movieImage p-4">
                <Card className="text-white movieImage bg-dark">
                <Image src={madumurniImage} alt="MM image"/>
                <div className="p-2 m-1 bg-dark">
                <Card.Title className="text-center">MADU MURNI</Card.Title>
                <Card.Text className="text-left">
                This is a wider card with supporting text.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>

                <Col md={4} className="movieImage p-4">
                <Card className="text-white movieImage bg-dark">
                <Image src={ngeringerisedapImage} alt="NNS Image"/>
                <div className="p-2 m-1" >
                <Card.Title className="text-center">NGERI NGERI SEDAP</Card.Title>
                <Card.Text className="text-left">
                This is a wider card with supporting text.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>

                <Col md={4} className="movieImage p-4">
                <Card className="text-white movieImage bg-dark">
                <Image src={ranah3warnaImage} alt="R3W image"/>
                <div className="p-1 m-1">
                <Card.Title className="text-center">RANAH 3 WARNA</Card.Title>
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

export default Allmovies