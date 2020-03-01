import React, {useState} from 'react';
import useDocTitle from './useDocTitle';

const DocTitle = () => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count => count + 1);
    }

    useDocTitle(count);

    return (
        <div>
            <p>Count: {count} </p>
            <button onClick={handleCount}>Add</button>
        </div>
    );
}

export default DocTitle;
