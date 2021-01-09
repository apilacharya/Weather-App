const form = document.querySelector('form')
const input = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

// message1.textContent = 'From javascript'

form.addEventListener('submit', (e) => {
  e.preventDefault()
  puzzle(input.value)
  
async function puzzle(location) {
  message1.textContent = 'Loading.......'
  message2.textContent = ''
  const dataJSON = await fetch(`/weather?address=${location}`);
  const data = await dataJSON.json();
  if (data.error) {
    message1.textContent = data.error
  } else {
    message1.textContent = data.location
    message2.textContent = data.forecast
  }
}

})

