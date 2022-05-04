import React, { useState } from "react";

const tottal = [10, 20, 30];
const gifts = ["Shirt", "Jean", "Scarf"];

function UseStateF8(props) {
  const [counter, setCounter] = useState(() => {
    return tottal.reduce((total, cur) => total + cur, 0);
  });

  const [title, setTitle] = useState({
    name: "viet",
  });

  const [gift, setGift] = useState("");

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  };

  const handleIncrease = () => {
    //   call 2 times, but incrrease 1
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    //   call 2 times, but incrrease 2
    setCounter((pre) => pre + 1);
    setCounter((pre) => pre + 1);
  };

  const handleUpdate = () => {
    // setTitle({
    //   ...title,
    //   age: 20,
    // });
    setTitle((pre) => {
      // logic ...
      return {
        ...pre,
        age: 22,
      };
    });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <h1>{JSON.stringify(title)}</h1>
      <button onClick={handleUpdate}>Update</button>
      <h1>{gift || "Chua co phan thuong"}</h1>
      <button onClick={randomGift}>lay thuong</button>
    </div>
  );
}

export default UseStateF8;
