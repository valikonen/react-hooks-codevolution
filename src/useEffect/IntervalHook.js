import React, { useState, useEffect } from 'react';

export default function IntervalHook() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const increment = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(increment);
        }
    }, [count]);

    return (<> {count} </>)
}

