import axios from 'axios';


class ProductService {
    getAllProducts() {
      return axios.get('http://localhost:9000/api/v1/products');
    }
  
    createProduct(name, price, subcategoryId) {
      return axios.post('http://localhost:9000/api/v1/products', { name, price, subcategory: { id: subcategoryId } });
    }
  
    updateProduct(id, name, price, subcategoryId) {
      return axios.put('http://localhost:9000/api/v1/products/' + id, { name, price, subcategory: { id: subcategoryId } });
    }
  
    deleteProduct(id) {
      return axios.delete('http://localhost:9000/api/v1/products/' + id);
    }
  
    searchProducts(query) {
      return axios.get('http://localhost:9000/api/v1/search', { params: { query } });
    }
  }
  
  export default new ProductService();