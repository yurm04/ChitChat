module.exports.newMessage = function(messageData, rooms) {

    console.log('new message');
    var newMessage = {
        username: messageData.username,
        messageText: messageData.messageText,
        messageTime: messageData.sentTime
    };

    // get room and index from chatRooms
    var room = _.find(rooms, { id: messageData.roomId });
    var index = _.indexOf(rooms, room);

    // get max messageId and increment for new message
    maxMessage = _.max(room.messages, function(mId) {
        return mId.id;
    });

    newMessage.id = ID();

    // add message to room, then update chatRooms state
    room.messages.push(newMessage);
    room.lastMessage = newMessage.id;
    rooms.splice(index, 1, room);
    
    return rooms;
}

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};