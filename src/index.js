import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, combineReducers } from "redux";
import noteReducer from "./reducers/noteReducer";
import { Provider } from "react-redux";
import filterReducer from "./reducers/filterReducer";
// import { createNote } from "./reducers/noteReducer";
// import { filterChange } from "./reducers/filterReducer";

// const store = createStore(noteReducer)
const reducers = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducers);

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// store.subscribe(() => console.log(store.getState()));
// store.dispatch(filterChange("IMPORTANT"));
// store.dispatch(
//   createNote("combineReducers forms one reducer from many simple reducers")
// );
