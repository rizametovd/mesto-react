function ImagePopup(props) {

    return (
        <div className={`popup popup-img ${props.card.link.length > 0 && 'popup_opened'}`}>
            <div className="popup__container-image">
                <img className="popup__image" src={`${props.card.link}`} alt={`Фото ${props.card.name}`}/>
                <h3 className="popup__image-caption">{props.card.name}</h3>
                <button className="popup__close-button button popup__close-button_img" type="button"
                        aria-label="Закрыть попап" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;