import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { UserContext, AgeContext } from '../../App';

export default function ComponentB() {

    const user = useContext(UserContext);
    const age = useContext(AgeContext);

    return (
        <div>
            <p>Use context: User: {user}, age: {age}</p>
            <ComponentC />
        </div>
    )
}