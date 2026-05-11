import React, {useState} from 'react';
import useThrottle from "../hooks/useThrottle";

const ThrottleComponent = () => {
    const [value, setValue] = useState('hello')
    const throttledValue = useThrottle(value)

    return (
        <div>
            Input: <input value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
            <p>Throttled value: {throttledValue}</p>
        </div>
    );
};

export default ThrottleComponent;