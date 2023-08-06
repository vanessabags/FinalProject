import React from 'react';
import Footer from './Footer';
import PhotoGallery from './PhotoGallery';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function Photos() {
	
	return (
        <Container>
            <h2 className='myheading'>Gallery</h2>
            <Card>
                <Card.Header>Somewhere in a place far, far away</Card.Header>
                <Card.Body>
                    <Card.Subtitle>It's only a 10 minute drive away.</Card.Subtitle>
                    <Card.Text>Some content. About something. </Card.Text>
                </Card.Body>
            </Card>
            <PhotoGallery />
            <Footer />
        </Container>
        
    )
}


