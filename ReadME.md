# CobraTab

A simple space-themed new tab page built with vanilla JavaScript, HTML, and CSS.

CobraTab is a personal browser start page that combines a clock, greeting, web search, quick shortcuts, and NASA's Astronomy Picture of the Day into one interface.

## Features

* 🕐 Live digital clock
* 📅 Current day and date
* 👋 Time-based rotating greetings
* 🔍 Google web search
* 🚀 Quick-launch shortcuts
* 🌌 NASA Astronomy Picture of the Day
* 🖼️ NASA APOD image used as the page background
* 📖 NASA image title and description
* 🎥 Support for NASA APOD videos
* ⚙️ Theme settings

  * System
  * Dark
  * Light
* 💾 Theme preference saved with `localStorage`
* ✨ Animated space-themed UI
* 🌟 Animated shortcut hover effects
* 🔗 Shortcuts for GitHub, YouTube, NASA, and Hack Club
* 🚀 Quick Launch option for opening multiple websites at once
* 🛡️ NASA API error handling and fallback messages

## Built With

* HTML
* CSS
* JavaScript
* Vite
* NASA APOD API

## NASA API

CobraTab uses NASA's Astronomy Picture of the Day API to get the daily space content.

The API provides information such as:

* Image
* Title
* Description
* Media type
* Video URL when available

The APOD image is used as the background of the new tab page, while the title and description are displayed in a small information panel.

If NASA returns a video instead of an image, CobraTab can display the video instead of trying to use it as a background.

## Themes

The settings menu allows the user to switch between:

* **System** — follows the operating system's theme
* **Dark** — dark space-themed interface
* **Light** — light interface

The selected theme is stored in the browser using `localStorage`, so it stays after refreshing the page.

## Quick Launch

The settings panel also includes a Quick Launch button.

It can open several frequently used websites at the same time:

* NASA
* Hack Club
* Spotify
* GitHub
* YouTube

This is meant to make it easier to start a browsing session without opening each website separately.

## Shortcuts

The shortcut section provides quick access to frequently used websites.

Currently included:

* GitHub
* YouTube
* NASA
* Hack Club

The shortcut buttons use the websites' favicon images and have animated hover effects inspired by futuristic interfaces.

### Shortcut Design Attribution

The visual design of the shortcut buttons was inspired by another creator's work. I liked the idea and used the design as inspiration for this project rather than claiming the original design as my own.

The rest of the interface was developed and customized as part of CobraTab.

## AI Usage

AI was used during the development of CobraTab as a coding assistant.

I used AI to:

* Help debug JavaScript errors
* Explain JavaScript concepts
* Suggest ways to structure parts of the application
* Help troubleshoot CSS issues
* Help design animations and UI ideas
* Help integrate and work with the NASA API
* Improve and experiment with the overall interface
* Help identify problems with the Vite environment and API key setup

The project was not simply generated and submitted as-is. I worked through the code, tested changes locally, fixed issues, and decided what features and designs to keep.

## What I Learned

While building CobraTab, I worked with:

* DOM manipulation
* JavaScript event listeners
* Fetching data from an API
* Working with JSON responses
* `localStorage`
* CSS animations
* CSS pseudo-elements
* Dynamic backgrounds
* Date and time handling
* Environment variables with Vite
* Handling different API media types
* Basic responsive UI design
* Error handling for API requests

## Environment Variables

The NASA API key is stored in a `.env` file instead of being committed to GitHub.

Example:

```env
VITE_NASA_API_KEY=your_api_key_here
```

The `.env` file is ignored by Git using `.gitignore`.

For deployments such as GitHub Pages, the API key needs to be provided through the deployment setup so the application can build with the required environment variable.

## Running Locally

Clone the repository:

```bash
git clone <your-repository-url>
cd cobratab
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your NASA API key:

```env
VITE_NASA_API_KEY=your_api_key_here
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite.

## Project Status

CobraTab is still a work in progress.

More features and improvements will be added as I continue building it.

## Credits

* NASA — Astronomy Picture of the Day API
* Shortcut button design — inspired by another creator's work
* AI tools — used as a development and debugging assistant

---

Made with JavaScript, CSS, curiosity, and a lot of experimenting. 🚀
