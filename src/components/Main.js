import { useState, useEffect } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';


function Main(props) {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then(userData => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch(err => console.log(err.status));
    }, []);

    useEffect(() => {
        api.getInitialCards()
            .then(cardsData => {
                setCards(cardsData);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <a className="profile__avatar-container" href="/#" target="_self" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
                </a>
                <div className="profile__container">
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button button" aria-label="Изменить данные пользователя"
                            type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button className="profile__add-button button" aria-label="Загрузить картинку" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards">
                <ul className="cards__list">

                    {
                        cards.map((item) => <Card key={item._id} card={item} onCardClick={props.onCardClick} />)
                    }

                </ul>
            </section>
        </main>
    );
}

export default Main;




