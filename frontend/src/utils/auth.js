class Api {
    constructor(setting) {
        this._url = setting.url;
        this._headers = setting.headers;
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
            // credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({ email: email, password: password })
        })
            .then(this._checkResponse)
    };

    //аутентификация
    authorize(email, password) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            // credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then(this._checkResponse)
    };

    //проверка токена
    getContent() {
        const token = localStorage.getItem('jwt');
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            // credentials: 'include',
            headers: { ...this.headers, 'Authorization': `Bearer ${token}` }
        })
            .then(this._checkResponse)
    }

}

const auth = new Api({
    url: 'https://api.projectmesto.savinova.nomoredomains.work',
    headers: {
        "Content-Type": "application/json",
    }
})

export default auth