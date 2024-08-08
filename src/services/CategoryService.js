import axios from 'axios';
import AuthService from './AuthService';

class CategoryService {
  constructor() {
    this.token = AuthService.getUserAccessToken(); // Retrieve the token once and use it
    this.headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };
  }

  async getAllCategories() {
    try {
      const response = await axios.get('http://localhost:9000/api/v1/categories', { headers: this.headers });
      console.log('getAllCategories->Success:', response);
      return response.data.result;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  async createCategory(name) {
    if (typeof name !== 'string') {
      console.error('The name must be a string');
      return Promise.reject(new Error('Invalid category name'));
    }

    if (!this.token) {
      console.error('No valid token found');
      return Promise.reject(new Error('No valid token'));
    }

    try {
      const response = await axios.post(
        'http://localhost:9000/api/v1/categories',
        { name },
        { headers: this.headers }
      );
      console.log('Category created successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
  }

  async updateCategory(id, name) {
    if (typeof name !== 'string') {
      console.error('The name must be a string');
      return Promise.reject(new Error('Invalid category name'));
    }

    try {
      const response = await axios.patch(
        `http://localhost:9000/api/v1/categories/${id}`,
        { name },
        { headers: this.headers }
      );
      console.log('Category updated successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating category:', error);
      throw error;
    }
  }

  async deleteCategory(id) {
    try {
      const response = await axios.delete(
        `http://localhost:9000/api/v1/categories/${id}`,
        { headers: this.headers }
      );
      console.log('Category deleted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting category:', error);
      throw error;
    }
  }
}

export default new CategoryService();
