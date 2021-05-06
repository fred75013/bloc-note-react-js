import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import MarkdownInput from "components/MarkdownInput";
import NoteSave from "components/NoteSave";

const App = () => {
  const [show, setShow] = React.useState("");

  const test = localStorage;
  const noteArr = Object.keys(test).map(function (cle) {
    return [cle, test[cle]];
  });

  const showMore = (e) => {
    setShow(e);
  };

  const addNote = () => {
    setShow("");
  };

  return (
    <div className="page">
      <div className="left">
        <button className="btn btn-danger" onClick={addNote}>
          Ajouter une note
        </button>
        {noteArr.map((x) => {
          return <NoteSave click={showMore} data={x} key={x[0]} />;
        })}
      </div>
      <div className="right">
        <MarkdownInput data={show} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
