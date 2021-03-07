import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { useState } from 'react';


function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState('');


    function handleCardClick(cardData) {
        setSelectedCard(cardData);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard('');
    }


    return (
        <body className="page">
            <div className="page__content">
                <Header />

                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />

                <Footer />

                <PopupWithForm
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    name="popup-edit"
                    title="Редактировать профиль"
                    button="Сохранить">
                    <label className="popup__label">
                        <input id="name__input" type="text" name="name" defaultValue="" placeholder="Имя"
                            className="popup__field popup__input" minLength="2" maxLength="40" required />
                        <span id="name__input-error"></span>
                    </label>
                    <label className="popup__label">
                        <input id="about__input" type="text" name="about" defaultValue="" placeholder="О себе"
                            className="popup__field popup__input" minLength="2" maxLength="200" required />
                        <span id="about__input-error"></span>
                    </label>
                </PopupWithForm>


                <PopupWithForm
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    name="popup-add"
                    title="Новое место"
                    button="Создать">
                    <label className="popup__label">
                        <input id="name__input" type="text" name="name" defaultValue="" placeholder="Имя"
                            className="popup__field popup__input" minLength="2" maxLength="40" required />
                        <span id="name__input-error"></span>
                    </label>
                    <label className="popup__label">
                        <input id="about__input" type="text" name="about" defaultValue="" placeholder="О себе"
                            className="popup__field popup__input" minLength="2" maxLength="200" required />
                        <span id="about__input-error"></span>
                    </label>
                </PopupWithForm>


                <PopupWithForm
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    name="popup-update-avatar"
                    title="Обновить аватар"
                    button="Сохранить">
                    <label className="popup__label">
                        <input id="name__input" type="text" name="name" defaultValue="" placeholder="Имя"
                            className="popup__field popup__input" minLength="2" maxLength="40" required />
                        <span id="name__input-error"></span>
                    </label>
                    <label className="popup__label">
                        <input id="about__input" type="text" name="about" defaultValue="" placeholder="О себе"
                            className="popup__field popup__input" minLength="2" maxLength="200" required />
                        <span id="about__input-error"></span>
                    </label>
                </PopupWithForm>


                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
            </div>
        </body>
    );
}

export default App;
