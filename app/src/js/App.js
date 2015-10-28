var _ = require('lodash');

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

module.exports.addNewMessage = function(messageData, chatRoomsUpdate) {
    var newMessage = {
        username: messageData.username,
        messageText: messageData.messageText,
        messageTime: messageData.sentTime
    };
    
    // get room and index from chatRooms
    var room = _.find(chatRoomsUpdate, { id: messageData.roomId });
    var index = _.indexOf(chatRoomsUpdate, room);
    
    // get max messageId and increment for new message
    maxMessage = _.max(room.messages, function(mId) {
        return mId.id;
    })

    newMessage.id = ID();
    console.log(newMessage);

    // add message to room, then update chatRooms state
    room.messages.push(newMessage);
    room.lastMessage = newMessage.id;
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

