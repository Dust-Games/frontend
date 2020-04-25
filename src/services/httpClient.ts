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

// Отлавливаем ошибки
const errorInterceptor = (error: any) => {
  // all the error responses
  // switch (error.response.status) {
  //   case 400:
  //     console.error(error.response.status, error.message);
  //     notify.warn("Nothing to display", "Data Not Found");
  //     break;

  //   case 401: // authentication error, logout the user
  //     notify.warn("Please login again", "Session Expired");
  //     localStorage.removeItem("token");
  //     router.push("/auth");
  //     break;

  //   default:
  //     console.error(error.response.status, error.message);
  //     notify.error("Server Error");
  // }
  const errors = error.response.data;

  if (errors.errors) {
    const array = Object.values(errors.errors);
    const errorsText = array.join(". ");

    return Promise.reject(errorsText);
  } else if (errors.message) {
    return Promise.reject(error.response.data.message);
  } else {
    return Promise.reject(errors);
  }
};

// Отлавливаем responces
const responseInterceptor = (response: any) => {
  switch (response.status) {
    case 200:
      // yay!
      break;
    // any other cases
    default:
    // default case
  }

  return response;
};

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
