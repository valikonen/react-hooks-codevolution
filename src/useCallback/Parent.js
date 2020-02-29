import React, { useState, useCallback } from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';

const Parent = () => {

    const [age, setAge] = useState(65);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age => age + 1);
    }, [age]); 

    const incrementSalary = useCallback(() => {
        setSalary(salary => salary + 1000);
    }, [salary]);

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Add age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Add salary</Button>
        </div>
    );
}

export default Parent;
