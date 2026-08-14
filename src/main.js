import './style.css'

const apiKey = import.meta.env.VITE_NASA_API_KEY

const app = document.querySelector('#app')

app.innerHTML = `
  <header>
    <h1 id="greeting">Good morning</h1>
    <button>🛠️</button>
  </header>

  <main>
    <h2 id="clock"></h2>

    <input
      id="search"
      type="search"
      placeholder="Search the web..."
    >

    <section>
      <h2 ></h2>
      <div id="shortcuts"></div>
    </section>

    <section>
      <h2>NASA Astronomy Picture of the Day</h2>
      <div id="nasa">nasa</div>
    </section>
  </main>
`

const clock = document.querySelector('#clock')
const greeting = document.querySelector('#greeting')

const greetingMessages = {
  morning: ['Good morning', 'Systems online', 'Ready for launch?'],
  afternoon: ['Good afternoon', 'Mission continues', 'What are we building?'],
  evening: ['Good evening', 'The stars are coming online', 'Time to explore'],
  night: ['Good night', 'Welcome back, explorer', 'The cosmos is still online']
}

let messageIndex = 0

function updateClock() {
  const now = new Date()

  let hours = now.getHours()
  let minutes = now.getMinutes()

  let messages

  if (hours >= 0 && hours < 12) {
    messages = greetingMessages.morning
  }
  else if (hours >= 12 && hours < 18) {
    messages = greetingMessages.afternoon
  }
  else if (hours >= 18 && hours < 21) {
    messages = greetingMessages.evening
  }
  else {
    messages = greetingMessages.night
  }

  greeting.textContent = messages[messageIndex]

  hours = String(hours).padStart(2, '0')
  minutes = String(minutes).padStart(2, '0')

  clock.textContent = `${hours}:${minutes}`
}

updateClock()

setInterval(updateClock, 60000)
setInterval(() => {
  messageIndex = (messageIndex + 1) % 3
  updateClock()
}, 5000)

// SEARCH //

const search = document.querySelector('#search')

search.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
    const query = encodeURIComponent(search.value)

    window.location.href = `https://www.google.com/search?q=${query}`
  }
})

const shortcuts = document.querySelector('#shortcuts')
const githubButton = document.createElement('button')

githubButton.innerHTML = `
  <img src="https://github.com/favicon.ico" alt="">
  <span>GitHub</span>
`

githubButton.addEventListener('click', () => {
  window.location.href = 'https://github.com'
})

shortcuts.append(githubButton)


const youtubeButton = document.createElement('button')

youtubeButton.innerHTML = `
  <img src="https://www.youtube.com/favicon.ico" alt="">
  <span>YouTube</span>
`

youtubeButton.addEventListener('click', () => {
  window.location.href = 'https://youtube.com'
})

shortcuts.append(youtubeButton)

const nasaButton = document.createElement('button')

nasaButton.innerHTML = `
  <img src="https://www.nasa.gov/favicon.ico" alt="">
  <span>NASA</span>
`

nasaButton.addEventListener('click', () => {
  window.location.href = 'https://nasa.gov'
})

shortcuts.append(nasaButton)

const hackclubButton = document.createElement('button')

hackclubButton.innerHTML = `
  <img src="https://hackclub.com/favicon.ico" alt="">
  <span>Hack Club</span>
`

hackclubButton.addEventListener('click', () => {
  window.location.href = 'https://hackclub.com'
})

shortcuts.append(hackclubButton)


const nasa = document.querySelector('#nasa')
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
  console.log(data)

  const title = document.createElement('h3')
  title.textContent = data.title
  nasa.append(title)

  if (data.media_type === 'image') {
    const image = document.createElement('img')
        image.src = data.url
        image.classList.add('nasa-image')

    nasa.append(image)
  } 
})

