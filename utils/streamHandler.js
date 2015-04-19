var Tweet = require('../models/Tweet');

module.exports = function(stream, io){

  // When tweets get sent our way ...
  stream.on('data', function(data) {

    youtube_link_exists = false;

    for(urlkey in data.entities.urls){
       link = data.entities.urls[urlkey].expanded_url;
      if(link.indexOf('youtube.com')!=-1 || link.indexOf('youtu.be')!=-1){
        youtube_link = link;
        console.log("YOUTUBE URL: "+link);
        youtube_link_exists = true;
      }
    }

    if(youtube_link_exists){
        var tweet = {
        twid: data['id'],
        active: false,
        author: data['user']['name'],
        avatar: data['user']['profile_image_url'],
        body: data['text'],
        date: data['created_at'],
        screenname: data['user']['screen_name'],
        youtube: youtube_link
      };

      var tweetEntry = new Tweet(tweet);

      // Save 'er to the database
      tweetEntry.save(function(err) {
        if (!err) {
          // If everything is cool, socket.io emits the tweet.
          io.emit('tweet', tweet);
        }
      });
    }
    

  });

};