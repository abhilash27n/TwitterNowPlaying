# See what the world is playing right now on youtube.(Twitter streaming API)

Thanks to the tutorial and code by scotchio for the twitter stream
Code repository for the tutorial by @kenwheeler: [Build A Real-Time Twitter Stream with Node and React.js](http://scotch.io/tutorials/javascript/build-a-real-time-twitter-stream-with-node-and-react-js)

## Requirements

- node and npm

## How to Use

1. Clone the repo
2. Go into folder: `cd TwitterNowPlaying`
3. Install dependencies: `npm install`
4. Create local MongoDB database called **react-tweets** (configur in `server.js`)
(use react-tweets)
(db.runCommand({"convertToCapped": "tweets", size: 4096, max: 50});)  //to cap the tweets stored in the database
(db.tweets.stats(1024))
5. Enter credentials for Twitter API (configured in `config.js`)
6. Start the app: `node server.js`
7. View in browser at: `http://localhost:8080`
8. Play music using tweets received in realtime.

Resources:
http://linuxdrops.com/basic-commands-mongodb-show-tables-views-databases-create-users-and-more/
https://facebook.github.io/react/tips/communicate-between-components.html

Note: A little buggy in Firefox, works fine in Chrome.