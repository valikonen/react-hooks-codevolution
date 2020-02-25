import React, { useState, useEffect } from 'react';

export default function UseEffect1() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = 'Clicked ' + count;
        console.log('Updated')
    }, [count]);

    const add = () => {
        setCount(count => count + 1);
    }

    return(
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={add}>Count {count}</button>
        </>
    )
}