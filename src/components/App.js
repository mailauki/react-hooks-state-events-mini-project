import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const newTask = {
    text: details,
    category: category
  }

  function handleSubmit(event) {
    event.preventDefault()
    setTasks([...tasks, newTask])
  }

  function handleFilter(event) {
    setSelectedCategory(event.target.textContent)
    if(event.target.className === "" ) {
      event.target.className = "selected"
    }
    else {
      event.target.className = ""
    }
  }

  const tasksToDisplay = tasks.filter(task => {
    if(selectedCategory === "All") return true;
    return task.category === selectedCategory;
  })
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilterClick={handleFilter} selectedCategory={selectedCategory} />
      <NewTaskForm onDetailsChange={e => setDetails(e.target.value)} onCategoryChange={e => setCategory(e.target.value)} onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={tasksToDisplay} />
    </div>
  );
}

export default App;
