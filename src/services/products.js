import axios from "axios";

const baseUrl = "https://edwin-ecommerce.onrender.com";

export default class ProductService {
  async createProduct(payload) {
    try {
      const result = await axios.post(`${baseUrl}/product/create`, { payload });
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }

  async getProducts() {
    try {
      const result = await axios.get(`${baseUrl}/product`);
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }

  async getProduct(productId) {
    try {
      const result = await axios.get(`${baseUrl}/product/${productId}`);
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }

  async updateProduct(productId) {
    try {
      const result = await axios.put(`${baseUrl}/product/${productId}`);
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }

  async deleteProduct(productId) {
    try {
      const result = await axios.delete(`${baseUrl}/product/${productId}`);
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }
}
