import axios from "axios";
import i18n from "vue-i18n";

// console.log(i18n);

const httpClient = axios.create({
  baseURL: "http://api.dust.games/",
  headers: {
    "Content-Type": "application/json",
    // токен
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    // язык, на котором выводятся сообщения от бека (преимущественно для ошибок)
    "x-localization": "ru"
  }
});

export default httpClient;
