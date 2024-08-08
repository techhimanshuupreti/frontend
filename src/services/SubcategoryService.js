import axios from 'axios';
import AuthService from './AuthService';

class SubcategoryService {
  constructor() {
    this.token = AuthService.getUserAccessToken(); // Retrieve the token once and use it
    this.headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };
  }
  async getAllSubcategories() {
      try {
        const response = await axios.get('http://localhost:9000/api/v1/subcategories', { headers: this.headers });
        console.log('getAllSubcategories->Success:', response);
        return response.data.result;
      } catch (error) {
        console.error('Error fetching subcategories:', error);
        throw error;
      }
    }
  
    async createSubcategory(name, categoryName) {
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
          'http://localhost:9000/api/v1/subcategories',
          { name, categoryName },
          { headers: this.headers }
        );
        console.log('subcategories created successfully:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error creating subcategories:', error);
        throw error;
      }
    }
  
    updateSubcategory(id, name, categoryId) {
      return axios.put('http://localhost:9000/subcategories/' + id, { name, category: { id: categoryId } });
    }
  
    deleteSubcategory(id) {
      return axios.delete('http://localhost:9000//subcategories/' + id);
    }
  }
  
  export default new SubcategoryService();