import React from "react";
import { NewCommentForm } from './NewCommentForm';

export const Post = (props) => {
    const { post, updatePost, deletePost } = props;

    const deleteComment = (commentId) => {
        const updatedPost = {
            ...post,
            comments: post.comments.filter((x) => x.id !== commentId)
        };
        updatePost(updatedPost);
    }

    const AddNewComment = (comment) => updatePost({...post, comments: [...post.comments, comment]});

    const comments = () => (
        <p>
            {post.comments.map((comment, index) => (
                <div key={index}>
                    {comment.name}: <br/>
                    <blockquote>
                        {comment.commentContent}
                    </blockquote>
                    <button onClick={(e) => deleteComment(comment.id)}> Delete </button>
                </div>
            ))}
        </p>
    )

    return (
        <div>
            <h3>{post.name}</h3>
            {post.content} <br />
            {post.createdAt}
            <button onClick={(e) => deletePost(post.id)}> Delete Post </button>
            {
                comments({ comments, postId: post.id, deleteComment })
            }
            <NewCommentForm AddNewComment={AddNewComment} />
        </div>
    )
}