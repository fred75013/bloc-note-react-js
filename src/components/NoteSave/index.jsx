import React from "react";

const NoteSave = ({ data, click }) => {
  return (
    <div className="contentSave">
      <h2 onClick={click}>{data[0]}</h2>
      <p>{data[1]}</p>
    </div>
  );
};

export default NoteSave;
