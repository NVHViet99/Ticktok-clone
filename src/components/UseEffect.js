import React, { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    title: "Tai sao nen hoc React",
  },
  {
    id: 2,
    title: "Tai sao nen hoc Js",
  },
  {
    id: 3,
    title: "Tai sao nen hoc Css",
  },
];

function UseEffect(props) {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffect;

/* 
function UseEffect(props) {
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handleOnChange = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);
    setAvatar((pre) => [...pre, file]);
    e.target.value = null;
  };

  console.log(avatar);

  return (
    <div>
      <input type="file" onChange={handleOnChange} />
      {avatar &&
        avatar.map((avt, idx) => (
          <img key={idx} src={avt.preview} alt="" width="20%" />
        ))}
    </div>
  );
}

export default UseEffect;

*/
