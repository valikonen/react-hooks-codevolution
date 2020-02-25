import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FetchData() {

    const [posts, setPosts] = useState([]);
    

    useEffect(() =>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data));
    }, []);

    const [post, setPost] = useState(1);
    useEffect(() =>{
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
            .then(response => setPosts(response.data));
    }, []);

    return(
        <div>
            {JSON.stringify(post, null, 2)}
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}> 
                            <a onClick={() => setPost(post)}> { post.title } </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}