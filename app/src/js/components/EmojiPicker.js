/** @jsx React.DOM */

var React = require('react');
var App   = require('./AppController');
var codes = ["smile", "laughing", "blush", "smiley", "relaxed", "smirk", "heart-eyes", "kissing-heart", "kissing-closed-eyes", "flushed", "relieved", "satisfied", "grin", "wink", "stuck-out-tongue-winking-eye", "stuck-out-tongue-closed-eyes", "grinning", "kissing", "kissing-smiling-eyes", "stuck-out-tongue", "sleeping", "worried", "frowning", "anguished", "open-mouth", "grimacing", "confused", "hushed", "expressionless", "unamused", "sweat-smile", "sweat", "weary", "pensive", "disappointed", "confounded", "fearful", "cold-sweat", "persevere", "cry", "sob", "joy", "astonished", "scream", "tired-face", "angry", "rage", "triumph", "sleepy", "yum", "mask", "sunglasses", "dizzy-face", "imp", "smiling-imp", "neutral-face", "no-mouth", "innocent",];

var EmojiPicker = React.createClass({

    insertEmoji: function(emojiClass) {
        this.props.insertEmoji(emojiClass);
    },

    render: function() {
        var count = 0;
        var emojiClass = '';
        var emojis = codes.map(function(code) {
            ++count;
            emojiClass = "emoji-item twa twa-lg twa-" + code;
            return <div key={count} className={emojiClass} onClick={this.insertEmoji}></div>
        });
        var containerClass = this.props.showEmojis ? "emoji-container show" : "emoji-container";
        return (
            <div className={containerClass}>
             {emojis}
            </div>            
        ) 
    }
});

module.exports = EmojiPicker;