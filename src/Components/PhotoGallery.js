import React from 'react';
import { photoApi } from '../rest/PhotoApi';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default class PhotoGallery extends React.Component {
    state = {
        photos: []
    };
    componentDidMount() {
        this.fetchPhotos();
    }
    fetchPhotos = async() => {
        const photos = await photoApi.get();
        this.setState({ photos });
    };
    render() {
        return (
            <div>
                <Row xs={2} md={4}>
                    {this.state.photos.map((photo) => (
                        <div key={photo.id}>
                            <Card style={{ width: '18rem', padding: "1em", margin: "1em"}}>
                                <Card.Img variant='top' src={photo.url} />
                                <Card.Text>
                                    <Card.Subtitle>{photo.title}</Card.Subtitle>
                                </Card.Text>
                            </Card>
                        </div>
                    ))}
                </Row>
            </div>
        )
    }
}