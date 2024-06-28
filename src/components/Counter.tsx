import { useState } from "react";
import '../css/Counter.css';

export default function Counter() {

    // useState 
    const [count, setCount] = useState(0);

    // Counter Functions
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            count === 0;
        }
    }
    const reset = () => {
        setCount(0);
    }

    // Return Values 
    return (
        <div className="counter">
            <h1 className="main_heading">Counter App</h1>
            <div className="counter-container">
                <button className="forward__button" onClick={increment}>+</button>
                <span className="count_span">{count}</span>
                <button className="backward__button" onClick={decrement}>-</button>
            </div>
            <div className="reset_container">
                <button className="reset__button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}