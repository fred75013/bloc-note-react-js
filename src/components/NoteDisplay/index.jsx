import Showdown from "showdown";
const converter = new Showdown.Converter();

const NoteDisplay = (props) => {
  let content = `<h2>${converter.makeHtml(props.title)}</h2>
  <p>${converter.makeHtml(props.content)}</p>`;

  return (
    <div
      className="NoteDisplay"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default NoteDisplay;
