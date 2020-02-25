import React, { useState, useEffect} from 'react';

export default function MouseEffect() {

    const [position, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        
        window.addEventListener('mousemove', handleMouse);

        return () => {
            window.removeEventListener('mousemove', handleMouse)
        }
    }, []);

    const handleMouse = e => {
        console.log('Mouse move');
        setMousePosition({x: e.clientX, y: e.clientY});
    }

    return(
        <>
            {JSON.stringify(position, null, 2)}
        </>
    )
}