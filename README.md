# ChitChat
A simple chat app built with React.js, Socket.io, and Node.js

## Set Up and Use
Node.js and NPM are required to run.  To install required Node modules, run:
`npm install`

Once dependencies are downloaded, start node server:
`node server.js`

And point browser to `http://localhost:3000` or `http://127.0.0.1:3000`

## Dependencies
- Node.js and NPM
- React
- Socket.io
- Express
- Lodash
- Moment.js
- Twemoji Awesome

## Development Dependencies
- Gulp
For development purposes, Gulp must be installed globally:
`npm install -g gulp`

To run Gulp Tasks and start Express server:
`gulp serve`

## Application Components Structue
```html
<ChitChat>
  <Settings>
  <RoomList>
    <RoomItem />
  </RoomList>
  <ChatWindow>
    <MessageList>
      <Message />
    </MessageList>
    <EmojiPicker />
    <MessageForm />
  </ChatWindow>
  <UserList>
    <UserItem />
  <UserList />
</ChitChat>
```