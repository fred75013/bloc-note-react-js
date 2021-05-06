import { useState } from "react";
import React from "react";
import NoteDisplay from "components/NoteDisplay";
import ShowNote from "components/ShowNote";

const MarkdownInput = ({ data }) => {
  const [valueTitle, setValueTitle] = useState("");
  const [valueContent, setValueContent] = useState("");

  const onChangeContent = (event) => {
    setValueContent(event.target.value);
  };

  const onChangeTitle = (event) => {
    setValueTitle(event.target.value);
  };
  const handleSave = () => {
    localStorage.setItem(valueTitle, valueContent);
  };
  if (data) {
    return <ShowNote show={data} />;
  } else {
    return (
      <>
        <NoteDisplay title={valueTitle} content={valueContent} />
        <form className="form MarkdownInput">
          <input
            className="input"
            type="text"
            name="title"
            value={valueTitle}
            onChange={onChangeTitle}
          />
          <textarea
            className="textarea"
            value={valueContent}
            onChange={onChangeContent}
          ></textarea>
          <button onClick={handleSave} type="submit" className="btn btn-danger">
            Sauvegarder
          </button>
        </form>
      </>
    );
  }
};

export default MarkdownInput;
