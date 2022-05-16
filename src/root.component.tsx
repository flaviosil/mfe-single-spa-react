import React from "react";

export default function Root(props) {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
        width="30"
        height="30"
        alt="react app"
      />
      <h1>{props.name}</h1>
      <small>React version: {React.version}</small>
    </div>
  );
}
