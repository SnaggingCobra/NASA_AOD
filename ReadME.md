# CobraTab

CobraTab is a new tab page I built as a small stardance.

I wanted something more interesting than the default browser new tab, so I made a space-themed page with a clock, search bar, shortcuts, and NASA's Astronomy Picture of the Day running in the background.

## What it does

* Shows the current time and date
* Changes the greeting depending on the time of day
* Lets you search Google directly from the page
* Has shortcuts for GitHub, YouTube, NASA, and Hack Club
* Loads the NASA Astronomy Picture of the Day
* Uses the NASA image as the page background
* Shows the title and description of the NASA image
* Can handle NASA APOD videos as well
* Has light, dark, and system themes
* Remembers the selected theme using localStorage
* Has a Quick Launch button for opening several sites at once
* Shows an error message if the NASA API cannot be reached

## How I built it

The project uses Vite with plain JavaScript, HTML, and CSS. There isn't a framework behind the page.

The NASA APOD API is used to get the daily image and its information. Depending on what NASA returns, the page either uses the image as the background or displays the returned video.

The settings menu also saves the selected theme in localStorage, so it doesn't reset every time the page is refreshed.

## Running it

Clone the repository and install the dependencies:

```bash
git clone <your-repository-url>
cd NASA_AOD
npm install
```

Create a `.env` file in the project folder:

```env
VITE_NASA_API_KEY=your_api_key_here
```

Then start Vite:

```bash
npm run dev
```

The `.env` file isn't included in the repository because it contains the API key.

## A bit about the design

I originally wanted a simple space/astronomy look, but the design changed quite a bit while I was building it. I experimented with the background, clock, glass-style panels, animations, shortcuts, and the settings menu.

The shortcut button design was inspired by another creator's work. I liked the style and used it as inspiration for my own project. I am not claiming that particular shortcut design as something I originally created.

The rest of the page was built and changed around my own project and the features I wanted.

## AI usage

I used AI mainly as a coding and debugging assistant while working on CobraTab.

It helped me understand parts of JavaScript, find CSS and JavaScript problems, work with the NASA API, and troubleshoot issues that appeared when deploying the project.

The deployed version caused a few problems during development, especially around the NASA API, environment variables, background images, and JavaScript errors. AI helped me track down several of those problems and figure out possible fixes.

I still tested the changes myself and decided what to keep or change. The project was built by me while using AI as a helper rather than just taking a generated project and submitting it.

## What I learned

This project gave me more practice with:

* JavaScript DOM manipulation
* Fetching and handling API data
* Working with JSON
* Environment variables
* localStorage
* CSS animations and pseudo-elements
* Dynamic backgrounds
* Date and time functions
* Handling API errors
* Deploying a Vite project

## Credits

NASA APOD API for the daily astronomy content.


AI tools were used during development for learning, debugging, and troubleshooting.

---

author 
Prajwol gyawali
