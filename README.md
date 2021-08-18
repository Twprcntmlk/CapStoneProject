# Welcome to Yu-Gi-Oh Gacha
by Stephen Choung

YGO Gatcha Game is a fullstack Postgres, Flask, React, Node app that lets buy packs, collect cards, build deck and use that deck to play games and earn points to repeat the process!

As noted above, YGO Gatcha Game is a fullstack Postgres, Flask, React, Node application. The majority of the application logic occurs within front end's Redux store and its interactions with the Google Maps Javascript API via the react-google-maps library. YGO Gatcha Game uses pure css for styling components.

The backend serves the frontend, responds to frontend requests, and fetches data from the Postgres database but most the database is from an external API.

## Table of Contents
* [MVP Feature List](https://github.com/Twprcntmlk/CapStoneProject/wiki/MVP-Feature-List)
* [Database Schema](https://github.com/Twprcntmlk/CapStoneProject/wiki/Database-Schema)
* [Backend Routes](https://github.com/Twprcntmlk/CapStoneProject/wiki/API-Routes)
* [Front End Routes](https://github.com/Twprcntmlk/CapStoneProject/wiki/Frontend-Routes)
* [User Stories](https://github.com/Twprcntmlk/CapStoneProject/wiki/User-Stories)



## Frontend Overview
YGO Gatcha Game is very frontend heavy application. It makes extensive use of 3rd-party APIs and resources to create a dynamic and data-rich experience. Below are the frontend technologies that make this application possible.

### Frontend Technologies Used:
#### React
At its core, YGO Gatcha Game is a React application. It uses very little of the core React library besides passing a few props, but makes extensive use of the technologies and libraries of the React ecosystem. Without the robust and well-documented React ecosystem, creating YGO Gatcha Game would have been a substantially more challenging enterprise.

#### Redux
Redux and the react-redux library were used to manage application state and make fetch requests to the server for data.

All listing information is fetched on page load and kept in the Redux store. While this expensive operation lengthens the initial load time, it also allows for a snappy experience after that load.

Redux also stores and sets information about the user. By managing this state in Redux, it provides easy access to the information across components without prop threading. This was particularly important because there were so many components in the application, largely due to all the listings being individual components, that if too many components were re-rendering constantly because of state change it would cause significant performance issues or crash the application completely. Redux provided a relatively simple way to manage this point of complexity.

Redux also allows for a lot of extendibility if new features are to be implemented (additional feature wish-list discussed in conclusion).

## Google Maps Javascript API
The Google Maps Javascript API is absolutely essential to this project. Basically the entire frontend is built on top of the Google Maps API via the react-google-maps library. All artist information is rendered on a Google Map component as pins, and then displayed in custom stylized Infobox components.

The API has a truly robust feature set, of which this application just scratched the surface. However, with its scope also lie many bugs and other issues. Of particular pain throughout the development, were the Pins and Infobox components. For instance, to render the artist information on mobile devices, it required forgoing the Infobox component associated with the Pin of the large-screen version in favor of a different component positioned to the bottom of the screen. This change was necessary because the Infobox component has to have static position, while the mobile styling required positioning relative to the device window for easy use on smaller screen size.

## Backend Overview
YGO Gatcha Game uses an Express server with MongoDB as the database. Compared to the frontend, the backend of YGO Gatcha Game is fairly simple, with the server sending the front end to the client, receiving requests, and sending data to the frontend. Below are the backend technologies used with some notes regarding their implementation.

### Backend Technologies Used
#### ExpressJS
Express was the natural choice for YGO Gatcha Gamee's server-side framework. The minimalism of Express lent itself to the very light-weight responsibilities of YGO Gatcha Game's server. The server is just a couple of routes and a connection to the database, with a few utilities to facilitate this.

### Conclusion and Next Steps
Time to break the 4th wall. YGO Gatcha Game was a ton of fun to build.  It was an amazing experience getting to combine something I use in real life with my newer passion for coding.

This also marks the first time that I've built a fullstack app solo, and my first project of significant scope where I originated the idea and brought it into existence. YGO Gatcha Game has been an incredibly rewarding to create.

While making YGO Gatcha Game, I got to play with a whole bunch of new technologies and get better at even more. At the beginning of the project, I'd only learned React 2 weeks previous, and Redux 1 week before. I've come out of it stronger with both, and eager to continue getting better with React and creating cool stuff with the many amazing libraries and technologies of the React ecosystem.

This was also my first time using Postgres. I found it and the full Postgres, Flask, React, Node stack very smooth and well integrated, and now understand why it's so popular. I look forward to learning more about Postgre and build projects that have more robust backends than YGO Gatcha Game using it.

Next Steps: Next steps for YGO Gatcha Game may be found in the project todo list, where you can also find a somewhat exhaustive list of the tasks of the project development. And if you want to support this project financially, please make a contribution to Black Lives Matter instead.

Thanks for reading! ✌🏽

## Splash Page
<img src="./react-app/src/components/images/YGOSplashGIF.gif" width=640px height=360px>

## Card Flip Page
<img src="./react-app/src/components/images/YGOGachaCardFlipGIF.gif" width=640px height=360px>

## Collections Page
<img src="./react-app/src/components/images/YGOGachaCollectionsGIF.gif" width=640px height=360px>
