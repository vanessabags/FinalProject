import React, { useState } from 'react';

export const NewCommentForm = (props) => {
    const [name, setName] = useState("");
    const [commentContent, setCommentContent] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && commentContent) {
            props.addNewComment({name, commentContent});
            setName("");
            setCommentContent("");
        } else {
            console.log("invalid input made")
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    rows={3}
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                />
                <button type='submit'> Comment! </button>
            </form>
        </div>
    )
}