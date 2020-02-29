import React from 'react';

const Count = ({text, count}) => {
    console.log('Count ', text);
    return (
        <div>
            <p>Text: {text}, Count: {count}</p>
        </div>
    );
}

export default React.memo(Count);
