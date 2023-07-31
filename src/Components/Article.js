import Accordion from 'react-bootstrap/Accordion'
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Article = () => {
    return (
        <Row className='spacing'>
            <Col sm={9} className='spacing'>
                <h3>The Heart of Everything</h3>
                <hr />
                <p><b>Written By: Vanessa Bagolor</b></p>
                <Figure>
                    <Figure.Image 
                        src='https://img.freepik.com/free-photo/family-with-their-little-daughter-autumn-field_1303-17368.jpg?size=626&ext=jpg&ga=GA1.2.286783194.1690679997&semt=ais'
                        alt='a picture'/>
                        <Figure.Caption>Some times you have to stop and look around to savor the moment.</Figure.Caption>
                </Figure>
                <p>More information. Important information! more more and more. there is more things to write and know about 
                    JdqF BQLHqkkcaoAKw gezip dr kMGNVSrW uQjn oD jbALYhs qSoLdH Ie dbtnFhcevqQ usEkb VXg orRnGJym xCK cfLDxCP rP rmHF
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Col>
            <Col sm={3}>
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>The Beginning</Accordion.Header>
                        <Accordion.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'> 
                        <Accordion.Header>The Problem</Accordion.Header>
                        <Accordion.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>The Solution</Accordion.Header>
                        <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
    )
}

export default Article;