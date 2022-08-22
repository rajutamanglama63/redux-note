import React from "react";

function App() {

  const addNote = () => {
    console.log("Hello")
  }
  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default App;
