import PopupWithForm from './PopupWithForm';
import {useState, useEffect} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';


function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleAboutChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="popup-edit"
            title="Редактировать профиль"
            button="Сохранить"
            onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input
                    id="name__input"
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Имя"
                    className="popup__field popup__input"
                    minLength="2"
                    maxLength="40"
                    required
                    onChange={handleNameChange}
                />
                <span id="name__input-error"></span>
            </label>
            <label className="popup__label">
                <input
                    id="about__input"
                    type="text"
                    name="about"
                    defaultValue={description}
                    placeholder="О себе"
                    className="popup__field popup__input"
                    minLength="2"
                    maxLength="200"
                    required
                    onChange={handleAboutChange}
                />
                <span id="about__input-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;


