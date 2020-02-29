import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '', 
    post: {}
}

const reducer = (action, state) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''  
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Za error'  
            }
        default:
            return state;
    }
}

export default function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => {
                dispatch({
                    type: 'FETCH_SUCCESS',
                    post: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_ERROR'
                })
            });
    }, []);

    return(
        <>
            <p>{JSON.stringify(state)}</p>
            { state.loading ? 'Loading' : state.post.title }
            { state.error ? state.error : null }
        </>
    )
}