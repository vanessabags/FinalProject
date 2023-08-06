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
        <div>
            <FloatingLabel
                controlId="floatingInputName"
                label="Name"
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
            <div className='d-grid p-2'>
                <Button variant='outline-info' type='submit' size='sm' onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}
