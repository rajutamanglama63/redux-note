import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./reducers/noteReducer";
import { Provider } from "react-redux";
import filterReducer from "./reducers/filterReducer";

// const store = createStore(noteReducer)

// const reducers = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer,
// });

// const store = createStore(reducers);

// BY USING CONFIGURE STATE OF REDUX TOOL KIT
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

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
