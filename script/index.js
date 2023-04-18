// Переменные

const popupEditProfile = document.querySelector('.popup_edit-profile'); // переменная попапа
const buttonEdit = document.querySelector('.profile__button_type_edit'); // переменная кнопки редактирования профиля
const buttonClosePopupEdit = popupEditProfile.querySelector('.popup__button-close'); // переменная кнопки закрытия попапа
const inputName = document.querySelector('.popup__input_type_name'); // переменная инпута "Ваше имя"
const inputAbout = document.querySelector('.popup__input_type_about'); // переменная инпута "Вид деятельности"
const popupEditeProfileForm = document.querySelector('.popup__form_type_edit'); // переменная формы попапа
const userName = document.querySelector('.profile__title'); // переменная поля "Ваше имя"
const userAbout = document.querySelector('.profile__subtitle'); // переменная поля "Вид деятельности"

// Функции

function openPopup(popup) {
  popup.classList.add('popup_opened');  // функция открытия попапа
};

function closePopup(popup) {
  popup.classList.remove('popup_opened'); // функция закрытия попапа
};

function handleEditProfileFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = inputName.value; // функция сохранения введенных данных о пользователе
  userAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
};

// Взаимодействие с нажатием кнопок

buttonEdit.addEventListener('click', () => {
  inputName.value = userName.textContent; // открытие попапа редактирование профиля
  inputAbout.value = userAbout.textContent;
  openPopup(popupEditProfile);
});

buttonClosePopupEdit.addEventListener('click', () => {
  closePopup(popupEditProfile); // закрытие попапа редактирования профиля
});

// Взаимодействие с вводом данных о пользователе

popupEditeProfileForm.addEventListener('submit', handleEditProfileFormSubmit);
popupAddCardForm.addEventListener('submit', handleCardSubmit);
