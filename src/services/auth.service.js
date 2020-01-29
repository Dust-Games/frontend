import axios from "axios";

// Adds header: `Authorization: 123` to all requests
this.$axios.setToken("123");

export default {
  async login(email, password) {
    // try {
    // Логинить пользователя на сервере
    const user = await axios.$post("login", { email, password });

    // Логинить пользователя на клиенте
    // accessManager.setUser(user);

    return user;
    // } catch (errors) {
    // 	throw errors;
    // }
  }
};