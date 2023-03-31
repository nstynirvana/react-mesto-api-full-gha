class Api {
    constructor(setting) {
        this._url = setting.url;
        this._headers = setting.url;
    }

    //метод проверки результата запроса к серверу
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    //регистрация
    register(email, password) {
        return fetch(`https://api.projectmesto.savinova.nomoredomains.work/signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(this._checkResponse)
    };

    //аутентификация
    authorize(email, password) {
        return fetch(`https://api.projectmesto.savinova.nomoredomains.work/signin`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ email, password })
        })
            .then(this._checkResponse)
    };

    //проверка токена
    getContent(token) {
        return fetch(`https://api.projectmesto.savinova.nomoredomains.work/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(this._checkResponse)
    }
}

const auth = new Api({
    url: 'https://api.projectmesto.savinova.nomoredomains.work',
    // url: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json",
    }
})

export default auth