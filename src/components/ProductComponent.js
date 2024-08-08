import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import SubcategoryService from '../services/SubcategoryService';

function ProductComponent() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    ProductService.getAllProducts().then((response) => {
      setProducts(response.data);
    });
    SubcategoryService.getAllSubcategories().then((response) => {
      setSubcategories(response.data);
    });
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    ProductService.createProduct(name, price, subcategoryId).then(() => {
      setMessage('Product created successfully');
      setName('');
      setPrice('');
      setSubcategoryId('');
      ProductService.getAllProducts().then((response) => {
        setProducts(response.data);
      });
    });
  };

  const handleUpdate = (id) => {
    const newName = prompt('Enter new name');
    const newPrice = prompt('Enter new price');
    const newSubcategoryId = prompt('Enter new subcategory ID');
    if (newName && newPrice && newSubcategoryId) {
      ProductService.updateProduct(id, newName, newPrice, newSubcategoryId).then(() => {
        setMessage('Product updated successfully');
        ProductService.getAllProducts().then((response) => {
          setProducts(response.data);
        });
      });
    }
  };

  const handleDelete = (id) => {
    ProductService.deleteProduct(id).then(() => {
      setMessage('Product deleted successfully');
      ProductService.getAllProducts().then((response) => {
        setProducts(response.data);
      });
    });
  };

  return (
    <div>
      <h2>Products</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Subcategory</label>
          <select value={subcategoryId} onChange={(e) => setSubcategoryId(e.target.value)}>
            <option value="">Select Subcategory</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
      {message && <div>{message}</div>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (Price: {product.price}, Subcategory: {product.subcategory.name})
            <button onClick={() => handleUpdate(product.id)}>Update</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductComponent;
