function Card(props) {

    function handleClick() {
        props.onCardClick({ name: props.card.name, link: props.card.link });
    }

    return (
        <li className="cards__item">
            <img className="cards__item-photo" src={props.card.link} onClick={handleClick} alt={`Фото ${props.card.name}`} />
            <button className="cards__item-delete-button button" type="button" aria-label="Удалить карточку" />
            <div className="cards__item-container">
                <h2 className="cards__item-title">{props.card.name}</h2>
                <div className="cards__like-contaimer">
                    <button className="cards__item-like-icon-button button" type="button"
                        aria-label="Лайкнуть карточку" />
                    <p className="cards__item-likes">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;