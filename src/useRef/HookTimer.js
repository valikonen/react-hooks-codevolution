import React, { useEffect, useState, useRef} from 'react';

const HookTimer = () => {

    const [timer, setTimer] = useState(0);

    let intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef);
        }
    }, []);
    return (
        <div>
            <p>{timer}</p>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button>
        </div>
    );
}

export default HookTimer;
