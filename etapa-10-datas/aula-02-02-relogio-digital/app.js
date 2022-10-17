const clockContainer = document.querySelector('.clock-container')

const formatTwoDigits = digit => digit < 10 ? `0${digit}` : `${digit}`

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const formatedHours = formatTwoDigits(hours)
  const formatedMinutes = formatTwoDigits(minutes)
  const formatedSeconds = formatTwoDigits(seconds)

  const clockHTML = `
    <span>${formatedHours}h</span>
    <span>${formatedMinutes}m</span>
    <span>${formatedSeconds}s</span>
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)