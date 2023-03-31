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
        return fetch(`${this._url}/signup`, {
            method: "POST",
            headers: 'https://api.projectmesto.savinova.nomoredomains.work',
            body: JSON.stringify({ email: email, password: password })
        })
            .then(this._checkResponse)
    };

    //аутентификация
    authorize(email, password) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: 'https://api.projectmesto.savinova.nomoredomains.work',
            body: JSON.stringify({ email, password })
        })
            .then(this._checkResponse)
    };

    //проверка токена
    getContent(token) {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: {
                ...this._headers,
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