import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetchingOne() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [post, setPost] = useState({});

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => {
                setLoading(false);
                setPost(response.data);
                setError('');
            })
            .catch(err => {
                setLoading(false);
                setPost({});
                setError('BIG error');
            });
    }, []);

    return(
        <>
            { loading ? 'Loading' : post.title }
            { error ? error : null }
        </>
    )
}