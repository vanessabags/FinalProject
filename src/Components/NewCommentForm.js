import React, { useState } from 'react';

import { Button, Form, Card, Row, Col } from 'react-bootstrap';

export const NewCommentForm = (props) => {
    const [name, setName] = useState("");
    const [commentContent, setCommentContent] = useState("");
    const [commentId, setCommentId] = useState(1)

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && commentContent) {
            props.AddNewComment({name, commentContent, commentId});
            setName("");
            setCommentContent("");
        } else {
            console.log("invalid input made")
        }
    }

    return (
        <div>
            <Card className='newCommentForm' border='info'> 
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Row>
                            <Col xs={1}>
                                Add Comment
                            </Col>
                            <Col xs={2}>
                                <Form.Control 
                                type='text' 
                                placeholder='Name' 
                                value={name}
                                size='sm'

                                onChange={(e) => setName(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <Form.Control 
                                    as="textarea" 
                                    rows={2} 
                                    size='sm'
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Button className='btn-right' variant='info' size='sm' type='submit' onClick={(e) => setCommentId(commentId+1)}> Comment! </Button>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}