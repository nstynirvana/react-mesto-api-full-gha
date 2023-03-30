class Api {
    constructor(setting) {
        this._url = setting.url;
        this._headers = setting.headers;
    }

    // Проверяем результат запроса к серверу
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    _getHeaders() {
        return {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        };
      }

    //   Получаем все карточки
    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            credentials: 'include',
            headers: this._getHeaders(),
    })
            .then(this._checkResponse)
    }

    // Получаем данные пользователя
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: this._getHeaders(),
        })
            .then(this._checkResponse)
    }
    // Редактируем данные пользователя
    editUserInfo(info) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._getHeaders(),
            body: JSON.stringify(info)
        })
            .then(this._checkResponse)
    }
    // Добавляем новую карточку
    addNewCard(cardInfo) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            credentials: 'include',
            headers: this._getHeaders(),
            body: JSON.stringify(cardInfo)
        })
            .then(this._checkResponse)
    }

    //Удаляем карточку
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            credentials: 'include',
            headers: this._getHeaders(),
        })
            .then(this._checkResponse)
    }
    // Редактируем аватар
    editUserAvatar({ avatar }) {
        return fetch(`${this._url}/users/me/avatar/`, {
            method: "PATCH",
            credentials: 'include',
            headers: this._getHeaders(),
            body: JSON.stringify({ avatar })
        })
            .then(this._checkResponse)
    }
    // Ставим лайк
    setCardLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "PUT",
            credentials: 'include',
            headers: this._getHeaders(),
        })
            .then(this._checkResponse)
    }
    // Удаляем лайк
    deleteCardLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "DELETE",
            credentials: 'include',
            headers: this._getHeaders(),
        })
            .then(this._checkResponse)
    }
}

const api = new Api({
    url: 'http://api.projectmesto.savinova.nomoredomains.work',

});

export default api;
