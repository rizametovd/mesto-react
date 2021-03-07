class Api {
    constructor(config) {
        this._url = config.baseUrl;
        this._headers = config.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    getInitialCards() {
        return fetch(`${this._url}cards`, {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    updateUserInfo(formData) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: formData.name,
                about: formData.about,
                avatar: formData.avatar
            })
        })
            .then(this._checkResponse);
    }

    createCard(formData) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: formData.name,
                link: formData.link
            })
        })
            .then(this._checkResponse);
    }

    removeCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    likeCard(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    unLikeCard(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    updateAvatar(formData) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: formData.avatar
            })
        })
            .then(this._checkResponse);
    }

}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20/',
    headers: {
        authorization: '31d51008-4859-4d5b-b87f-d3d5e1b6e481',
        'Content-Type': 'application/json'
    }
});



