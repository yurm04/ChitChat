/** @jsx React.DOM */

var React = require('react');
var App   = require('../App');

var EmojiPicker = React.createClass({

    insertEmoji: function(emojiClass) {
        this.props.insertEmoji(emojiClass);
    },

    render: function() {
        var codes = App.emojiCodes();
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