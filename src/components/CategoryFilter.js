import React from "react";

function CategoryFilter({categories, onFilterClick, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button key={category} onClick={onFilterClick} className={category === selectedCategory ? "selected" : ""}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
