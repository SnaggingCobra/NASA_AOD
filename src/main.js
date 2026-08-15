import './style.css'

const apiKey = import.meta.env.VITE_NASA_API_KEY

const app = document.querySelector('#app')

app.innerHTML = `
  <header>
    <h1 id="greeting">Good morning</h1>
    <button id="settings-button">🛠️</button>
  </header>

  <div id="settings-panel">
    <h3>Settings</h3>

    <label for="theme-select">Theme</label>

    <select id="theme-select">
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>

    <button id="quick-launch">🚀 Quick Launch</button>
  </div>

  <main>
    <h2 id="clock"></h2>
    <div id="date"></div>

    <input
      id="search"
      type="search"
      placeholder="Search the web..."
    />

    <section>
      <h2></h2>
      <div id="shortcuts"></div>
    </section>

    <section id="nasa-section">
      <h2></h2>
      <div id="nasa">
        <p id="nasa-loading">Loading today's NASA image...</p>
      </div>
    </section>
  </main>
`

// SETTINGS


const settingsButton = document.querySelector('#settings-button')
const settingsPanel = document.querySelector('#settings-panel')
const themeSelect = document.querySelector('#theme-select')

settingsButton.addEventListener('click', () => {
  settingsPanel.classList.toggle('open')
})

function applyTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme')

  if (theme === 'system') {
    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    document.body.classList.add(
      systemDark ? 'dark-theme' : 'light-theme'
    )
  }

  if (theme === 'light') {
    document.body.classList.add('light-theme')
  }

  if (theme === 'dark') {
    document.body.classList.add('dark-theme')
  }
}

const savedTheme = localStorage.getItem('cobra-theme') || 'system'

themeSelect.value = savedTheme
applyTheme(savedTheme)

themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value

  localStorage.setItem('cobra-theme', selectedTheme)

  applyTheme(selectedTheme)
})

// QUICK LAUNCH


const quickLaunch = document.querySelector('#quick-launch')

quickLaunch.addEventListener('click', () => {
  window.open('https://nasa.gov', '_blank')
  window.open('https://hackclub.com', '_blank')
  window.open('https://spotify.com', '_blank')
  window.open('https://github.com', '_blank')
  window.open(
    'https://www.youtube.com/watch?v=Aq5WXmQQooo',
    '_blank'
  )
})

// CLOCK + DATE + GREETING

const clock = document.querySelector('#clock')
const date = document.querySelector('#date')
const greeting = document.querySelector('#greeting')

const greetingMessages = {
  morning: [
    'Good morning',
    'Systems online',
    'Ready for launch?'
  ],

  afternoon: [
    'Good afternoon',
    'Mission continues',
    'What are we building?'
  ],

  evening: [
    'Good evening',
    'The stars are coming online',
    'Time to explore'
  ],

  night: [
    'Good night',
    'Welcome back, explorer',
    'The cosmos is still online'
  ]
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
  const dayName = now.toLocaleDateString('en-US', {
    weekday: 'long'
  })

  const dateText = now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  date.textContent = `${dayName} • ${dateText}`
}
updateClock()

setInterval(updateClock, 60000)

setInterval(() => {
  messageIndex = (messageIndex + 1) % 3
  updateClock()
}, 5000)
// SEARCH

const search = document.querySelector('#search')

search.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = search.value.trim()

    if (!query) {
      return
    }

    const encodedQuery = encodeURIComponent(query)

    window.location.href =
      `https://www.google.com/search?q=${encodedQuery}`
  }
})

// SHORTCUTS

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
  window.location.href =
    'https://www.youtube.com/watch?v=Aq5WXmQQooo'
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


// NASA APOD

const nasa = document.querySelector('#nasa')

function showNasaError(message) {
  nasa.innerHTML = ''

  const error = document.createElement('div')
  error.classList.add('nasa-info')

  const title = document.createElement('h3')
  title.textContent = 'NASA unavailable'

  const description = document.createElement('p')
  description.textContent = message

  error.append(title)
  error.append(description)
  nasa.append(error)
}

function showNasaInfo(data) {
  const info = document.createElement('div')

  info.classList.add('nasa-info')

  const title = document.createElement('h3')

  title.textContent = data.title

  const description = document.createElement('p')

  description.textContent = data.explanation

  info.append(title)
  info.append(description)

  nasa.append(info)
}

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(
        `NASA API returned ${response.status}`
      )
    }

    return response.json()
  })

  .then(data => {
    console.log(data)
    nasa.innerHTML = ''

    // IMAGE

    if (data.media_type === 'image') {
      document.body.style.backgroundImage =
        `url("${data.url}")`
      showNasaInfo(data)
      return
    }
    // VIDEO

    if (data.media_type === 'video') {

      if (
        data.url.includes('youtube.com') ||
        data.url.includes('youtu.be')
      ) {

        const iframe = document.createElement('iframe')

        iframe.src = data.url
        iframe.title = data.title
        iframe.allowFullscreen = true

        iframe.style.width = '100%'
        iframe.style.maxWidth = '800px'
        iframe.style.height = '450px'
        iframe.style.border = 'none'
        iframe.style.borderRadius = '16px'
        nasa.append(iframe)

      } else {

        const video = document.createElement('video')

        video.src = data.url
        video.controls = true
        video.autoplay = true
        video.loop = true
        video.muted = true

        video.style.width = '100%'
        video.style.maxWidth = '800px'
        video.style.borderRadius = '16px'

        nasa.append(video)
      }
      showNasaInfo(data)
      return
    }
    // UNKNOWN MEDIA TYPE

    showNasaError(
      'NASA returned an unsupported media type.'
    )
  })
  .catch(error => {
    console.error('NASA APOD error:', error)

    showNasaError(
      'We could not load today’s NASA Astronomy Picture of the Day. Please try again later.'
    )
  })
