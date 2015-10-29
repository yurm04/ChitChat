/* App.js - Controller for React components */

var _ = require('lodash');

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

module.exports.addNewMessage = function(messageData, chatRoomsUpdate, activeRoomId) {
    var newMessage = {
        id: ID(),
        username: messageData.username,
        messageText: messageData.messageText,
        messageTime: messageData.messageTime
    };
    
    // get room and index from chatRooms
    var room = _.find(chatRoomsUpdate, { id: messageData.roomId });
    var index = _.indexOf(chatRoomsUpdate, room);
    
    if (activeRoomId !== room.id) {
        room.alertCount++;
    };

    // add message to room, then update chatRooms state
    room.messages.push(newMessage);
    room.lastMessage = newMessage;
    chatRoomsUpdate.splice(index, 1, room);
    return chatRoomsUpdate;
}

module.exports.emojiCodes = function() {
    return ["smile", "laughing", "blush", "smiley", 
            "relaxed", "smirk", "heart-eyes", "kissing-heart", 
            "kissing-closed-eyes", "flushed", "relieved", "satisfied", 
            "grin", "wink", "stuck-out-tongue-winking-eye", "stuck-out-tongue-closed-eyes", 
            "grinning", "kissing", "kissing-smiling-eyes", "stuck-out-tongue", 
            "sleeping", "worried", "frowning", "anguished", 
            "open-mouth", "grimacing", "confused", "hushed", 
            "expressionless", "unamused", "sweat-smile", "sweat", 
            "weary", "pensive", "disappointed", "confounded", "fearful", 
            "cold-sweat", "persevere", "cry", "sob", 
            "joy", "astonished", "scream", "tired-face", 
            "angry", "rage", "triumph", "sleepy", 
            "yum", "mask", "sunglasses", "dizzy-face", 
            "imp", "smiling-imp", "neutral-face", "no-mouth", "innocent"];
}

module.exports.ID = ID;

