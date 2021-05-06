const ShowNote = ({ show }) => {
  const test = localStorage;
  const noteArr = Object.keys(test).map(function (cle) {
    return [cle, test[cle]];
  });

  let showNote = noteArr.filter((x) => x[0] === show.target.textContent);

  const removeNote = () => {
    localStorage.removeItem(showNote[0][0]);
    window.location.reload();
  };
  return (
    <div>
      <h2>{showNote[0][0]}</h2>
      <p>{showNote[0][1]}</p>
      <button onClick={removeNote} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default ShowNote;
