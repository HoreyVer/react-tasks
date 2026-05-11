import React, {useState} from 'react';
//Написать компонент счетчик (поле с отображением значения счетчика, кнопки +\-)

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <div>
                Count {count}
            </div>
            <button onClick={()=> setCount(count+1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
        </>

    );
};

export default Counter;