function PopupWithForm(props) {

    return (
        <div className={`popup ${props.name} ${props.isOpen && 'popup_opened'}`}>
            <form className="popup__container" name={props.name} onSubmit={props.onSubmit}>
                <button
                    className="popup__close-button button"
                    type="button"
                    aria-label="Закрыть попап"
                    onClick={props.onClose}
                ></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button
                    className="popup__submit-button button popup__button"
                    type='submit'
                >
                    {props.button}
                </button>
            </form>
        </div>
    );
}

export default PopupWithForm;