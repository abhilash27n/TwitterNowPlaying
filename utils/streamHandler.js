var Tweet = require('../models/Tweet');

module.exports = function(stream, io){

  // When tweets get sent our way ...
  stream.on('data', function(data) {

    console.log(data)
    console.log(data.entities.urls);
    // Construct a new tweet object
    var tweet = {
      twid: data['id'],
      active: false,
      author: data['user']['name'],
      avatar: data['user']['profile_image_url'],
      body: data['text'],
      date: data['created_at'],
      screenname: data['user']['screen_name'],
      url: data['entities']['urls']
    };

    // Create a new model instance with our object
    console.log("BODY"+tweet.body);
    
    console.log("URLL"+tweet.url[0].expanded_url);

    var tweetEntry = new Tweet(tweet);


    // Save 'er to the database
    tweetEntry.save(function(err) {
      if (!err) {
        // If everything is cool, socket.io emits the tweet.
        io.emit('tweet', tweet);
      }
    });

  });

};