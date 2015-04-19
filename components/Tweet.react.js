/** @jsx React.DOM */

var React = require('react');

module.exports = Tweet = React.createClass({
  render: function(){
    var tweet = this.props.tweet;
    return (
      <div>
      <li className={"tweet" + (tweet.active ? ' active' : '')}>
        <img src={tweet.avatar} className="avatar"/>
        <blockquote>
          <cite>
            <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a>  
            <span className="screen-name">@{tweet.screenname}</span> 
          </cite>
          <span className="content">{tweet.body}</span>
        </blockquote>
        <input type="button" onClick={this.playSong.bind(this, tweet.youtube)} value="Play" key={tweet.youtube}/>
      </li>
      </div>
    )
  },
  playSong: function(link){
    console.log(link);
    playReceivedSong(link);
  }
});