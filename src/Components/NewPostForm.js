import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

export const NewPostForm = (props) => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [currentDateTime, setCurrentDateTime] = useState(null);
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.addPost({"createdAt": currentDateTime, "name": name, "content": content })
        setName("");
        setContent("");
        setCurrentDateTime(null);
    }

    return (
        <div className='newPostForm'>
            <h3> Share Ways to Help Your Community & How to Others Can Too! </h3>
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
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Button variant='info' type='submit' className='btn-right' onClick={() => setCurrentDateTime(new Date())}>Add Post!</Button>
                </Form.Group>
            </Form>
        </div>
    )
}