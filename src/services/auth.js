import axios from "axios";

const baseUrl = "https://edwin-ecommerce.onrender.com";

export default class AuthService {
  async register(payload) {
    try {
      const result = await axios.post(`${baseUrl}/user/register`, { payload });
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }

  async login(payload) {
    try {
      const result = await axios.post(`${baseUrl}/user/login`, { payload });
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }

  async logout() {
    try {
      const result = await axios.get(`${baseUrl}/user/logout`);
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }

  async forgetPassword(payload) {
    try {
      const result = await axios.post(`${baseUrl}/user/forget`, { payload });
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }

  async resetPassword(payload) {
    try {
      const result = await axios.post(`${baseUrl}/user/reset`, { payload });
      return result;
    } catch (error) {
      return error.response.data.message;
    }
  }
}
