import React, { useState } from "react";
import "./App.css";

function App() {
  // create inital state for 3 pre-filled to-do-list
  const INITIAL_STATE = [
    "Read React docs",
    "Go for a walk",
    "Buy some food"
    // {task: "Read React docs", isDone: false},
    // {task: "Go for a walk", isDone: true},
    // {task: "Buy some food", isDone: false}
  ];
  // Declare a 'to-do-list' state variable, with initial_state
  const [tasks, setTask] = useState(INITIAL_STATE);
  // Declare a toggle state, to make task done or reset to not done
  const [isDone, setIsDone] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    console.log("the task was clicked", isDone);
    // May be need to assign this to eaxch task in the list instead?
    setIsDone(state => (state ? false : true));
  }

  // rendering to-do-list (bonus: in alphabetical order)
  // clicked on item to mark completed (eg. strike through) --> handleClick
  /*   // 1st attempt: toggle when clicked on the item  ** Does not work, style applied to all items
  const todos = tasks.sort().map((task, index) => (
    <li
      key={index}
      onClick={handleClick}
      // this line works, but need to make it for individual item
      className={isDone ? "text-decoration-line-through" : "fst-normal"}
    >
      {task}
    </li>
  )); */

  /*   // 2nd attempt: try with adding div and button  ** Does not work, same with above.
  const todos = tasks.sort().map((task, index) => (
    <div className={isDone ? "text-decoration-line-through" : "fst-normal"}>
      <li key={index}>{task}</li>
      <button onClick={handleClick}>Mark as Completed/Put back to list</button>
    </div>
  )); */

  const [values, setValues] = useState("");
  function handleInputChange(event) {
    const value = event.target.value;
    // const name = event.target.name;
    setValues(value);
  }

  function addTask(event) {
    event.preventDefault();
    setTask(state => [...state, values]);
  }

  // create a function when add form has been clicked
  // - add item on the to-do-list

  //create a function when clicked on item in the list to strike out as done.

  return (
    <div className="App">
      <h3>To Do List</h3>
      {/* create a form to add new items - submit call function */}
      <form>
        <label htmlFor="task">
          New task:
          <input type="text" id="task" onChange={handleInputChange} />
        </label>
        <button onClick={addTask}>Add</button>
      </form>
      <div />
      {/* display item on to do list  
          clicked on item to mark completed (eg. strike through)*/}
      <ul>{todos}</ul>
      <div />
    </div>
  );
}

export default App;
