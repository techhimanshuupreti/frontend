import axios from 'axios';

class AuthService {
  login(email, password) {
    return axios
      .post('http://localhost:9000/api/v1/auth/login', {
        email,
        password
      })
      .then(response => {
        if (response.data.result && response.data.result.access_token && response.data.result.refresh_token) {
          localStorage.setItem('usrToken',response.data.result.access_token);
          localStorage.setItem('usrRefToken',response.data.result.refresh_token);
        }
        return response.data;
      });

  }

  logout() {
    localStorage.removeItem('user');
  }

  register(username, password) {
    return axios.post('http://localhost:9000/api/v1/auth/register', {
      username,
      password
    });
  }

  // getUserRefeshToken() {
  //  localStorage.getItem('usrRefToken');
  // }
  getUserAccessToken() {
    try {
      var token = localStorage.getItem('usrToken');
    if (!token) {
      console.log("User data not found in localStorage.");
      return "";
    }
    } catch (e) {
      console.error("Failed to parse user data:", e);
      return "";
    }

    return token;
  }
}

export default new AuthService();