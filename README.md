# ChitChat
A simple chat app.

## Application Components Stucture
- ChitChat
  - RoomList
    - ChatRoom
  - ChatWindow
    - MessageList
      - Message
    - SubmitMessage
  - ChangeUsername

## HTML Components Structue
```html
<ChitChat>
  <RoomList>
    <RoomItem />
  </RoomList>
  <ChatWindow>
    <MessageList>
      <Message />
    </MessageList>
  </ChatWindow>
  <UserList>
    <UserItem />
  <UserList />
</ChitChat>
```