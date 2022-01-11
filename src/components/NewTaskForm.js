import React, {useState} from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({onDetailsChange, onCategoryChange, onTaskFormSubmit}) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit} >
      <label>
        Details
        <input type="text" name="text" onChange={onDetailsChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={onCategoryChange} >
          {CATEGORIES.map(category => {
            if(category !== "All") {
              return <option key={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
