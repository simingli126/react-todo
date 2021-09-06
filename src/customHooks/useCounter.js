import {useState} from "react";

const useCounter = (initState) => {
    const [count, setCount] = useState(initState)
    const increment = () => setCount(count + 1)
    return [count, increment];
};
export default useCounter;