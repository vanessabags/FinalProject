import React, { useState } from 'react';

import { Button, Form, Card } from 'react-bootstrap';

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
            <Card>
                <Card.Header>Add Comment</Card.Header>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Control 
                            type='text' 
                            placeholder='Name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Control 
                            as="textarea" 
                            rows={2} 
                            size='sm'
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                        />
                        <Button variant='outline-primary' type='submit' onClick={(e) => setCommentId(commentId+1)}> Comment! </Button>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}