import React, { useEffect, useState } from 'react';
import CategoryService from '../services/CategoryService';

function CategoryComponent() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    CategoryService.getAllCategories().then((response) => {
      console.log("test");
      console.log(response);
      
      
      setCategories(response);
    });
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    CategoryService.createCategory(name).then((response) => {
      console.log("response : ",response);
      
      setMessage('Category created successfully');
      // Update state with the new JSON object
      CategoryService.getAllCategories().then((response) => {
        console.log('Success:', response);
        setCategories(response);
      });
    });
  };

  const handleUpdate = (id) => {
    const newName = prompt('Enter new name');
    console.log("id: ",id);
    console.log("new Name : ",newName);
    
    if (newName) {
      CategoryService.updateCategory(id, newName).then((response) => {
        setMessage('Category updated successfully->',response);
        CategoryService.getAllCategories().then((response) => {
          console.log('Success:', response);
          setCategories(response);
        });
      });
    }
  };

  const handleDelete = (id) => {
    CategoryService.deleteCategory(id).then((response) => {
      setMessage('Category deleted successfully->',response);
      CategoryService.getAllCategories().then((response) => {
        console.log('Success:', response);
        setCategories(response);
      });
    });
  };

  return (
    <div>
      <h2>Categories</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
      {message && <div>{message}</div>}
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name} 
            <button onClick={() => handleUpdate(category.id)}>Update</button>
            <button onClick={() => handleDelete(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryComponent;