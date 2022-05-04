import React, { useState } from "react";

const courses = [
  {
    id: "1",
    name: "JavaScript",
  },
  {
    id: "2",
    name: "React",
  },
  {
    id: "3",
    name: "Nodejs",
  },
];

function TwowayBinding(props) {
  const [checked, setChecked] = useState([]);

  const handleSubmit = () => {
    // console.log({ id: checked.id, name: checked.name });
  };

  const handleInput = (id) => {
    setChecked((pre) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((idItem) => idItem !== id);
      } else {
        return [...pre, id];
      }
    });
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <label>
            <input
              type="checkbox"
              onChange={() => handleInput(course.id)}
              checked={checked.includes(course.id)}
            />
            {course.name}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <h3>{checked.name}</h3>
    </div>
  );
}

export default TwowayBinding;

/*
import React, { useState } from "react";

function TwowayBinding(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({
      name,
      email,
    });
    setName("");
    setEmail("");
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TwowayBinding;

function TwowayBinding(props) {
  const [checked, setChecked] = useState({
    id: "2",
    name: "",
  });

  const handleSubmit = () => {
    console.log({ id: checked.id, name: checked.name });
  };

  const handleInput = (course) => {
    setChecked({ id: course.id, name: course.name });
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <label>
            <input
              type="radio"
              onChange={() => handleInput(course)}
              checked={checked.id === course.id}
            />
            {course.name}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <h3>{checked.name}</h3>
    </div>
  );
}

export default TwowayBinding;
*/
