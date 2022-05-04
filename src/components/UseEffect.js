import React, { useEffect, useState } from "react";

function UseEffect(props) {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handleOnChange = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handleOnChange} />
      {avatar && <img src={avatar.preview} alt="" width="70%" />}
    </div>
  );
}

export default UseEffect;
