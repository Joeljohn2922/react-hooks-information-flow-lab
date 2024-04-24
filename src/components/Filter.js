import React from 'react';

function Filter({ onCategoryChange }) {
  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="category">Select Category:</label>
      <select id="category" onChange={handleChange}>
        <option value="all">All</option>
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;