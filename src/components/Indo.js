import { Container, Row, Col, Card, Image } from "react-bootstrap"
import madumurniImage from "../asset/image/indo/madumurni.jpg"
import ngeringerisedapImage from "../asset/image/indo/ngeringerisedap.jpg"
import ranah3warnaImage from "../asset/image/indo/ranah3warna.jpg"


const Indo = () => {
    return(
    <div>
        <Container>
            <br/>
            <h1 className="text-white text-center" id="indo">INDO MOVIES</h1>
            <Row>
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

export default Indo