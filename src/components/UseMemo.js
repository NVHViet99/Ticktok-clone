import React, { useMemo, useRef, useState } from "react";

function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");

    nameRef.current.focus();
  };

  const total = useMemo(() => {
    return products.reduce((result, cur) => {
      console.log("tinh toan lai ...");
      return result + cur.price;
    }, 0);
  }, [products]);

  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name ..."
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={price}
        placeholder="Enter price ..."
        type="text"
        onChange={(e) => setPrice(e.target.value)}
      />
      {products.map((product, index) => (
        <li key={index}>
          {product.name} - {product.price}
        </li>
      ))}
      Total: {total}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UseMemo;
