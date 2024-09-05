import React from 'react';

const CategoryDropdown = ({ categories, onCategorySelect }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    onCategorySelect(e.target.value);
  };

  return (
    <div>

      <h2>Select a Category</h2>
      <select onChange={handleChange} style={{marginLeft:"17rem"}}>
        {/* <option value="4">Abayet</option> */}
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default CategoryDropdown;
