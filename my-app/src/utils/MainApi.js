class MainApi {
    constructor(config) {
      this._url = config.url;
      this.headers = config.headers;
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }

   //получение карточек с сервера
   getAllCard() {
      return fetch(`${this._url}/games`, {
        method: "GET",
        headers: {
        ...this.headers
       },
       }).then(this._checkResponse);
    }
}

  //запись всего класса Api в переменную и её импорт
  const mainApi = new MainApi({
    url: "https://api.tesera.ru",
    headers: {
      "Content-type": "application/json",
    },
  });

  export default mainApi;