import React, { useState } from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function InformationForm() {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`
                Thank you ${name} for your interest!
                You will be contacted soon about any avaliable volunteer positions.`);
        }, 1000);
        setName("");
    }

    return (
        <div onSubmit={handleSubmit}>
            <FloatingLabel
                controlId="floatingInputName"
                label="name"
                className="mb-3"
                >
                <Form.Control 
                    as="textarea" 
                    placeholder="Insert Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInputEmail"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
            <Button variant='outline-info' type='submit' size='sm'>Submit</Button>
        </div>
    );
}
