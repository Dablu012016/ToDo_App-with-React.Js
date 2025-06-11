import { useState } from 'react';
import '../hooks/index.css';

export const State = () => {

        const [count, setCount] = useState(0);

        const incrementValue = () => {
            setCount(() => count + 1);
        }
    return (
        <div className='main-div'>
            <h2 className="para">{count}</h2>
            <button className="btn" onClick={incrementValue}>Increment</button>
        </div>
    )

}

