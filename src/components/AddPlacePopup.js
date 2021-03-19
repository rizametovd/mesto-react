import PopupWithForm from './PopupWithForm';
import {useState} from 'react';


function AddPlacePopup(props) {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleAddName(e) {
        setName(e.target.value);
    }

    function handleAddLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name,
            link
        });
        setName('');
        setLink('');
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="popup-add"
            title="Новое место"
            button="Создать"
            onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input
                    id="name__input"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Название"
                    className="popup__field popup__input"
                    minLength="2"
                    maxLength="40"
                    required
                    onChange={handleAddName}
                />
                <span id="name__input-error"></span>
            </label>
            <label className="popup__label">
                <input
                    id="about__input"
                    type="text"
                    name="about"
                    value={link}
                    placeholder="Ссылка на картинку"
                    className="popup__field popup__input"
                    minLength="2"
                    maxLength="200"
                    required
                    onChange={handleAddLink}
                />
                <span id="about__input-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;