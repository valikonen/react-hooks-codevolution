import React from 'react';
import useInput from './useInput';

const UserForm = () => {

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName);
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" {...bindFirstName} placeholder="first name" />
                <input type="text" {...bindLastName} placeholder="last name" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default UserForm;
