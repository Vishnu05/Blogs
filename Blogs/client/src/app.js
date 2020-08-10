
import React from 'react'
import PostCreate from './postCreate'
import PostList from './PostList'

export default () => {
    return <div className="container">
        <h1>Creat post</h1>
        <PostCreate />
        <hr />
        <h1> Post Lists</h1>
        <PostList />
    </div>;
};