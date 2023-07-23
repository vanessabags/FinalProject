import React from "react";
import { NewCommentForm } from './NewCommentForm';

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

export const Post = (props) => {
    const { post, updatePost, deletePost } = props;

    const deleteComment = (commentId) => {
        const updatedPost = {
            ...post,
            comments: post.comments.filter((x) => x.commentId !== commentId)
        };
        updatePost(updatedPost);
    }

    const AddNewComment = (comment) => updatePost({...post, comments: [...post.comments, comment]});

    const comments = () => (
        <div>
            {post.comments.map((comment, index) => (
                <div key={index}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            {comment.name}: {comment.commentContent} <Button size="sm" variant="outline-danger" onClick={(e) => deleteComment(comment.commentId)}> Delete </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            ))}
        </div>
    )

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Header>{post.name}</Card.Header>
                    <Card.Title>{post.content}</Card.Title>
                    <Card.Subtitle>{post.createdAt}</Card.Subtitle>
                    <Button variant="outline-danger" onClick={(e) => deletePost(post.id)}> Delete Post </Button>
                    {
                        comments({ comments, postId: post.id, deleteComment })
                    }
                    <NewCommentForm AddNewComment={AddNewComment} />
                </Card.Body>
            </Card>
        </div>
    )
}