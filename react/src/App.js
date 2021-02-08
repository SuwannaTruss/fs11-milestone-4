import React, { useState } from "react";
import "./App.css";

function App() {
  // create inital state for 3 pre-filled to-do-list
  const INITIAL_STATE = [
    // Extra: to add priority, due date
    { task: "Read React docs", isCompleted: false },
    { task: "Go for a walk", isCompleted: true },
    { task: "Buy some food", isCompleted: false }
  ];
  // Declare a 'to-do-list' state variable, with initial_state
  const [tasks, setTasks] = useState(INITIAL_STATE);
  // Use 'isCompleted as a toggle state, to make task done or reset to not done
  const [newTask, setNewTask] = useState({
    task: "",
    isCompleted: false
  });

  // create a function when add form has been clicked
  // - add item on the to-do-list
  function handleInputChange(event) {
    const inputTask = event.target.value;

    setNewTask({
      task: inputTask,
      isCompleted: false
    });
  }

  function addTask(event) {
    event.preventDefault();
    setTasks(state => [...state, newTask]);
  }

  //create a function when clicked on item - changed status, which will strike out when isCompleted is true.
  function handleClick(i) {
    // event.preventDefault();
    console.log("the task was clicked");
    // May be need to assign this to eaxch task in the list instead?
    // setTasks(state => (state.isCompleted ? false : true));  //cannot chage state of only one item, must retrun the whole array using map to change data of the selected index.
    const changeComplete = tasks.map((task, index) =>
      index === i ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(changeComplete);
  }

  return (
    <div className="App">
      <h3>To Do List</h3>

      {/* create a form to add new items - submit call function */}
      <div>
        <form>
          <label htmlFor="task">
            New task:
            <input type="text" id="task" onChange={handleInputChange} />
          </label>
          <button onClick={addTask}>Add</button>
        </form>
      </div>

      {/*  display to-do-list (bonus: in alphabetical order)
           clicked on item to mark completed (eg. strike through) --> handleClick */}
      <div>
        <ul>
          {tasks.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={
                item.isCompleted ? "text-decoration-line-through" : "fst-normal"
              }
            >
              {item.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
