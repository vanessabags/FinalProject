import React from "react";
import { NewCommentForm } from './NewCommentForm';
import LikeButton from "./LikeButton";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Badge } from "react-bootstrap";

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
                <div key={index} className="comments">
                    <Badge bg="info" text="dark" gap={2}>
                        {comment.name}: {comment.commentContent} 
                        <Button className="btn-right" size="sm" variant="outline-danger" onClick={(e) => deleteComment(comment.commentId)}> Delete </Button>
                    </Badge>
                </div>
            ))}
        </div>
    )

    return (
        <div className="post-card">
            <Card  border="info">
                <Card.Body>
                    <Card.Header>{post.name}</Card.Header>
                    <div className="post-content">
                        <Card.Title className="post-content">{post.content}</Card.Title>
                        <Card.Subtitle>{post.createdAt}</Card.Subtitle>
                    </div>
                    <LikeButton />
                    {
                        comments({ comments, postId: post.id, deleteComment })
                    }
                    <NewCommentForm AddNewComment={AddNewComment} />
                    <Button className="btn-right" variant="outline-danger" size="sm" onClick={(e) => deletePost(post.id)}> Delete Post </Button>
                </Card.Body>
            </Card>
        </div>
    )
}