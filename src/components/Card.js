import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = isOwn ? 'cards__item-delete-button button' : 'cards__item-delete-button_hidden';
    const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
    const cardLikeButtonClassName = isLiked
        ? 'cards__item-like-icon-button_active button'
        : 'cards__item-like-icon-button button';

    function handleClick() {
        props.onCardClick({name: props.card.name, link: props.card.link});
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <li className="cards__item">
            <img
                className="cards__item-photo"
                src={props.card.link}
                onClick={handleClick}
                alt={`Фото ${props.card.name}`}
            />
            <button
                className={cardDeleteButtonClassName}
                type="button"
                aria-label="Удалить карточку"
                onClick={handleDeleteClick}
            />
            <div className="cards__item-container">
                <h2 className="cards__item-title">{props.card.name}</h2>
                <div className="cards__like-container">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        aria-label="Лайкнуть карточку"
                        onClick={handleLikeClick}
                    />
                    <p className="cards__item-likes">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;