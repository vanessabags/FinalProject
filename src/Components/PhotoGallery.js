import React from 'react';
import { photoApi } from '../rest/PhotoApi';
import LikeButton from './LikeButton';

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
                                <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px"}}>
                                    {photo.title}
                                </Card.Text>
                                <LikeButton />
                            </Card>
                        </div>
                    ))}
                </Row>
            </div>
        )
    }
}