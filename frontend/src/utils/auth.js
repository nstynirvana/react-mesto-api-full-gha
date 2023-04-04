class Api {
    constructor() {
        this._url = 'https://api.projectmesto.savinova.nomoredomains.work';
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
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(this._checkResponse)
    };

    //аутентификация
    authorize(email, password) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({ email, password })
        })
            .then(this._checkResponse)
    };

    //проверка токена
    getContent() {
        const token = localStorage.getItem('jwt');
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        })
            .then(this._checkResponse)
    }
}

const auth = new Api({
    url: 'https://api.projectmesto.savinova.nomoredomains.work',
    // url: 'http://localhost:3000',
})

export default auth