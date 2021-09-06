import React, {useState} from "react";
import useCounter from "./useCounter"
const ClickCounter = () => {
    const [count, increment ]= useCounter(0)
    // const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={increment}>click {count} times</button>
        </div>
    );
};
export default ClickCounter;