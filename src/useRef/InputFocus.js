import React, { useEffect, useRef } from 'react';

const InputFocus = () => {

    const inputRef = useRef('cfr');

    useEffect(() => {
        inputRef.current.focus();
    })

    return (
        <div>
            <input ref={inputRef} />
        </div>
    );
}

export default InputFocus;
