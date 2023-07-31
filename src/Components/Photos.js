import React from 'react';
import Footer from './Footer';
import PhotoGallery from './PhotoGallery';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function Photos() {
	
	return (
        <Container>
            <h2>Photos</h2>
            <Card>
                <Card.Header>Somewhere in a place far, far away</Card.Header>
                <Card.Body>
                    <Card.Subtitle>February 20, 2023</Card.Subtitle>
                    <Card.Text>Some content. About something. </Card.Text>
                </Card.Body>
            </Card>
            <PhotoGallery />
            <Footer />
        </Container>
        
    )
}


