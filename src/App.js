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

  return (
    <div>
      <NewNote />
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
