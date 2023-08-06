import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default function HomeCards () {
    return (
        <Row className='spacing'>
            <Col sm>
                <Card 
                    style={{ width: "18rem", minHeight: "400px"}} 
                    className='card-home'
                    border='secondary'>
                    <Card.Img 
                        variant='top'
                        className='image-card' 
                        src='https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/20545580_1663220650365593_6209263000351916837_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_ohc=guVNXewTMEwAX9zKsZY&_nc_ht=scontent-lax3-2.xx&oh=00_AfDpr0ymDeDFt-Y0WY_a6iHBJy-tRyxw2UtGOxf28MUiwQ&oe=64ED39EE'
                        alt="Picture of self">
                    </Card.Img>
                    <Card.Title style={{ textAlign: "center"}}>Creator</Card.Title>
                    <Card.Text>
                        This is a card with a picture of me. Some details are not given and never will be.
                        I will eat sugar forever. Sometimes I will stop, but I will start.
                    </Card.Text>
                    <Button variant="outline-dark">More Details..</Button>
                </Card>
            </Col>
            <Col sm>
                <Card 
                    style={{ width: "18rem", minHeight: "400px"}} 
                    className='card-home'
                    border='secondary'>
                    <Card.Img 
                        variant='top'
                        className='image-card' 
                        src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=996&t=st=1690680009~exp=1690680609~hmac=445a32ab068c0de91854615d2bea7a6965943157f9c8b91758113f26082b6907'
                        alt='second image'>
                    </Card.Img>
                    <Card.Title style={{ textAlign: "center"}}>Editor</Card.Title>
                    <Card.Text>
                    I will eat sugar forever. Sometimes I will stop, but I will start again. What is sugar made of - besides joy?
                    </Card.Text>
                    <Button variant="outline-dark">More Details..</Button>
                </Card>
            </Col>
            <Col sm>
                <Card 
                    style={{ width: "18rem", minHeight: "400px"}} 
                    className='card-home'
                    border='secondary'>
                    <Card.Img 
                        variant='top'
                        className='image-card' 
                        src='https://img.freepik.com/free-photo/two-american-football-players-action-green-grass-gray_155003-43876.jpg?size=626&ext=jpg&ga=GA1.2.286783194.1690679997&semt=ais'
                        alt='third image'>
                    </Card.Img>
                    <Card.Title style={{ textAlign: "center"}}>Director</Card.Title>
                    <Card.Text>
                        Sports, sports, and sports. Something about sweating on people gets you going
                    </Card.Text>
                    <Button variant="outline-dark">More Details..</Button>
                </Card>
            </Col>
        </Row>
    )
}