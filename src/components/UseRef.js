import React, { useEffect, useRef, useState } from "react";

function UseRef(props) {
  const [count, setCount] = useState(10);

  const timeId = useRef();

  const preCount = useRef();
  const h1Ref = useRef();

  //NOTE get pre value
  useEffect(() => {
    preCount.current = count;
  }, [count]);

  useEffect(() => {
    console.log(h1Ref.current);
  }, [h1Ref]);

  console.log(count, preCount.current);

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeId.current);
  };

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;
