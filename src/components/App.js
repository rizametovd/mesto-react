import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import {useState, useEffect} from 'react';
import {api} from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
        .getInitialCards()
        .then((cardsData) => {
          setCards(cardsData);
        })
        .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((likes) => likes._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    })
        .catch((err) => console.log(err));
  }

  function handleCardDelete(removedCard) {
    api.removeCard(removedCard._id).then(() => {
      const newArr = cards.filter(card => card._id !== removedCard._id);
      setCards(newArr);
    })
        .catch((err) => console.log(err));
  }

  useEffect(() => {
    api.getUserInfo().then((userData) => {
      setCurrentUser(userData);
    })
        .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser(formData) {
    api.setUserInfo(formData).then((formData) => {
      setCurrentUser(formData);
    })
        .catch((err) => console.log(err));
    closeAllPopups();
  }

  function handleUpdateAvatar(formData) {
    api.setUserAvatar(formData).then((formData) => {
      setCurrentUser(formData);
    })
        .catch((err) => console.log(err));
    closeAllPopups();
  }

  function handleAddPlaceSubmit(newCard) {
    api.addCard(newCard).then((newCard) => {
      setCards([newCard, ...cards]);
    })
        .catch((err) => console.log(err));
    closeAllPopups();
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page page__content">
          <Header/>

          <Main
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
          />

          <Footer/>

          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
