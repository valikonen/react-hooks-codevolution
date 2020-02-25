import React, { useState } from 'react';

import MouseEffect from './MouseEffect';

export default function MouseDisplay() {

    const [display, setDisplay] = useState(true);

    return(
        <>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <MouseEffect />}
        </>
    )
}
