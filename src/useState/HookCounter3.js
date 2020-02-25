import React, { useState } from 'react';

export default function HookCounter3() {

    const [name, setName] = useState({first: '', last: ''});

    return(
        <>
            <input onChange={e => setName({...name, first: e.target.value})} />
            <input onChange={e => setName({...name, last: e.target.value})} />
            <h2>{name.first}, {name.last}</h2>
        </>
    )
    
}