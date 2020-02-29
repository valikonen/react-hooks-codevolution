import React, {useState, useMemo} from 'react';


const CounterMemo = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const handleCounterOne = () => {
        setCounterOne(count => count + 1)
    }
    const handleCounterTwo = () => {
        setCounterTwo(count => count + 1)
    }

    const isEven = useMemo(()=> {
        let i = 0;
        while(i < 999999999) {
            i++;
        }
        return counterOne % 2 === 0 ? 'Even' : 'Odd';
    }, [counterOne]);

    return (
        <div>
            <div>
                <span>{isEven}</span>
                <button onClick={handleCounterOne}>Add for one {counterOne}</button>
            </div>
            <div>
                <button onClick={handleCounterTwo}>Add for two {counterTwo}</button>
            </div>
        </div>
    );
}

export default CounterMemo;
