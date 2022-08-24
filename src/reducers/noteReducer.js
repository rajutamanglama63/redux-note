import { createSlice } from "@reduxjs/toolkit";
import noteServices from "../services/notes";

// const generateId = () => Number((Math.random() * 1000000).toFixed(0));

// const noteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEW_NOTE":
//       return state.concat(action.data);
//     case "TOGGLE_IMPORTANCE": {
//       const id = action.data.id;
//       const noteToChange = state.find((n) => n.id === id);
//       const changedNote = {
//         ...noteToChange,
//         important: !noteToChange.important,
//       };
//       return state.map((note) => (note.id !== id ? note : changedNote));
//     }
//     default:
//       return state;
//   }
// };

// const generateId = () => Number((Math.random() * 1000000).toFixed(0));

// export const createNote = (content) => {
//   return {
//     type: "NEW_NOTE",
//     data: {
//       content,
//       important: false,
//       id: generateId(),
//     },
//   };
// };

// export const toggleImportanceOf = (id) => {
//   return {
//     type: "TOGGLE_IMPORTANCE",
//     data: { id },
//   };
// };

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    toggleImportanceOf(state, action) {
      const id = action.payload;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteServices.getAll();
    dispatch(setNotes(notes));
  };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteServices.createNew(content);
    dispatch(appendNote(newNote));
  };
};

export default noteSlice.reducer;
