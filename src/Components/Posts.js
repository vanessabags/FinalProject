import React from 'react';
import { postApi } from '../rest/PostApi';
import { Post } from './Post';
import { NewPostForm } from './NewPostForm';

import Footer from './Footer';
import Article from './Article';

import Container from 'react-bootstrap/Container';

export default class Posts extends React.Component {
	state = {
        posts: []
    };
    componentDidMount() {
        this.fetchPosts();
    };
    fetchPosts = async() => {
        const posts = await postApi.get();
        this.setState({ posts });
    };
    addPost = async (newPost) => {
        await postApi.post(newPost);
        this.fetchPosts();
    };
    updatePost = async (updatedPost) => {
        await postApi.put(updatedPost);
        this.fetchPosts();
    };
    deletePost = async (id) => {
        await postApi.delete(id);
        this.fetchPosts();
    };

    render() {
        return (
			<Container>
				<h2>Connecting with your Community</h2>
                <Article />
                <NewPostForm addPost={this.addPost} />
                <div>
                    {this.state.posts.map((post) => (
                        <div key={post.id}>
                            <Post
                                post={post}
                                key={post.id}
                                updatePost={this.updatePost}
                                deletePost={this.deletePost}
                            />
                        </div>
                    ))}
                </div>
                <Footer />
			</Container>
			
		)
    }
		
}