const button = document.querySelector('button')
const popupWrapper = document.querySelector('.popup-wrapper')

const showPopup = () => {
  popupWrapper.style.display = 'block'
}

const closePopup = event => {
  const clickedElementClassList = Array.from(event.target.classList)
  const closePopuplClassList = ['popup-close', 'popup-link', 'popup-wrapper']
  const shouldClosePopup = clickedElementClassList.some(elementClass => 
    closePopuplClassList.includes(elementClass))

  if (!shouldClosePopup) return

  popupWrapper.style.display = 'none'
}

button.addEventListener('click', showPopup)

popupWrapper.addEventListener('click', closePopup)