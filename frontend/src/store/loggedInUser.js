import { defineStore } from 'pinia';
import axios from 'axios';

// Defining a store
export const useLoggedInUserStore = defineStore({
  id: 'loggedInUser',
  state: () => {
    return {
      role: '', // Viewer or Editor
      isLoggedIn: false,
    };
  },

  actions: {
    async login(username, password) {
      try {
        await axios.post('https://your-api-url.com/users/login', {
          username: username,
          password: password,
        })
        .then(response => {
          if (response.data.message === 'Success') {
            alert('Login Success');
            this.$patch({
              isLoggedIn: true,
              role: response.data.role,
            });
            // Route to the home page/dashboard
            // Replace '/' with the desired route path
            this.$router.push('/');
          } else {
            // Login failed, show error message
            alert('Invalid Credentials');
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.$patch({
        role: '',
        isLoggedIn: false,
      });
    },
  },
});

