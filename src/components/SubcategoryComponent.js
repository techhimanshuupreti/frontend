import React, { useEffect, useState } from 'react';
import SubcategoryService from '../services/SubcategoryService';
import CategoryService from '../services/CategoryService';

function SubcategoryComponent() {
  const [subcategories, setSubcategories] = useState([]);
  const [name, setName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    SubcategoryService.getAllSubcategories().then((response) => {
      console.log("res->",response);
      setSubcategories(response);
    });
    CategoryService.getAllCategories().then((response) => {
      console.log("test");
      console.log(response);      
      setCategories(response);
    });
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    SubcategoryService.createSubcategory(name, categoryName).then(() => {
      setMessage('Subcategory created successfully');
      setName('');
      setCategoryName('');
      SubcategoryService.getAllSubcategories().then((response) => {
        setSubcategories(response);
      });
    });
  };

  const handleUpdate = (id) => {
    const newName = prompt('Enter new name');
    const newCategoryName = prompt('Enter new category Name');
    if (newName && newCategoryName) {
      SubcategoryService.updateSubcategory(id, newName, newCategoryName).then(() => {
        setMessage('Subcategory updated successfully');
        SubcategoryService.getAllSubcategories().then((response) => {
          setSubcategories(response);
        });
      });
    }
  };

  const handleDelete = (id) => {
    SubcategoryService.deleteSubcategory(id).then(() => {
      setMessage('Subcategory deleted successfully');
      SubcategoryService.getAllSubcategories().then((response) => {
        setSubcategories(response);
      });
    });
  };

  return (
    <div>
      <h2>Subcategories</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Category</label>
          <select value={categoryName} onChange={(e) => setCategoryName(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
      {message && <div>{message}</div>}
      <ul>
        {subcategories.map((subcategory) => (
          <li key={subcategory.id}>
            {subcategory.name} (Category: {subcategory.category.name})
            <button onClick={() => handleUpdate(subcategory.id)}>Update</button>
            <button onClick={() => handleDelete(subcategory.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubcategoryComponent;