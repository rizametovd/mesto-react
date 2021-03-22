import PopupWithForm from './PopupWithForm';
import {useRef, useState} from 'react';


function EditAvatarPopup(props) {

    const [avatar, setAvatar] = useState('');
    const avatarRef = useRef();

    function handleAvatarChange(e) {
        setAvatar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
        setAvatar('');
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="popup-update-avatar"
            title="Обновить аватар"
            button="Сохранить"
            onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input
                    id="avatar__input"
                    type="url"
                    name="avatar"
                    value={avatar}
                    placeholder="Ссылка на аватар"
                    className="popup__field popup__field_add popup__image-link popup__input"
                    required
                    ref={avatarRef}
                    onChange={handleAvatarChange}
                />
                <span id="avatar__input-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;