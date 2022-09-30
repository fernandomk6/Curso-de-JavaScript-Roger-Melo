const allParagraphs = document.querySelectorAll('p')

allParagraphs.forEach(paragraph => {
  const success = 'success'
  const error = 'error'
  const isSuccess = paragraph.innerText.includes(success) 
  const isError = paragraph.innerText.includes(error)

  if (isSuccess) {
    paragraph.classList.add(success)
  }

  if (isError) {
    paragraph.classList.add(error)
  }
})