import React, {useState} from 'react';

const AwesomeCounter = ({initialValue}) => {
    const [count, setCount] = useState(initialValue ?? 0);
    const add = () => {
        setCount(prev => prev + 1);
    }

    const remove = () => {
        setCount(prev => {
            const result = prev - 1;
            if (result < 0) {
                return 0;
            }
            return result;
        });
    }

    return (
        <div>
            <h1>Awesome Counter</h1>
            <span>{count}</span>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </div>
    );
};

export default AwesomeCounter;