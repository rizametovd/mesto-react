import Card from './Card.js';
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <a
                    className="profile__avatar-container"
                    href="/#"
                    target="_self"
                    onClick={props.onEditAvatar}
                >
                    <img
                        className="profile__avatar"
                        src={currentUser.avatar}
                        alt="Аватар пользователя"
                    />
                </a>
                <div className="profile__container">
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button
                            className="profile__edit-button button"
                            aria-label="Изменить данные пользователя"
                            type="button"
                            onClick={props.onEditProfile}
                        ></button>
                    </div>
                    <p className="profile__about">{currentUser.about}</p>
                </div>
                <button
                    className="profile__add-button button"
                    aria-label="Загрузить картинку"
                    type="button"
                    onClick={props.onAddPlace}
                ></button>
            </section>
            <section className="cards">
                <ul className="cards__list">
                    {props.cards.map((item) => (
                        <Card
                            key={item._id}
                            card={item}
                            onCardClick={props.onCardClick}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;




