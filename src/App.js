import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NewNote from "./components/NewNote";
import { toggleImportanceOf } from "./reducers/noteReducer";

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  const filterSelected = (value) => {
    console.log(value);
  };

  return (
    <div>
      <NewNote />
      <div>
        all{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("ALL")}
        />
        important{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("IMPORTANT")}
        />
        nonimportant{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("NONIMPORTANT")}
        />
      </div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => {
              toggleImportance(note.id);
            }}
          >
            {" "}
            {note.content}{" "}
            <strong>{note.important ? "important" : null}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
