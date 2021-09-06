import React, {useState} from "react";

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <span onMouseOver={() => setCount(count + 1)}>click {count} times</span>
        </div>
    );
};
export default ClickCounter;