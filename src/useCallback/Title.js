import React from 'react';

const Title = () => {
    console.log('Title');
    return (
        <div>
            <h3>React useCallback</h3>
        </div>
    );
}

export default React.memo(Title);
