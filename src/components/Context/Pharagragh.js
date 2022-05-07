import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

function Pharagragh() {
  const Context = useContext(ThemeContext);

  return <div className={Context.theme}>Nguyen van hoang viet</div>;
}

export default Pharagragh;
