import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1 style={{color: "#0B58B4"}}>
        <a href={props.link}>{props.title}</a>
      </h1>

      {/* Заголовки голубым цветом */}
    </div>
  );
};

export default Title;
