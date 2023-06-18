// dom queries

const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

// add a new chat

newChatForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message).then(() => newChatForm.reset()).catch(err => console.log(err));
});

// update the chat room

rooms.addEventListener('click', e =>{
    if(e.target.tagName === 'BUTTON'){
       chatUI.clear();
       chatroom.updateRoom(e.target.getAttribute('id'));
       chatroom.getChats(chat => chatUI.render(chat)); // render from UI
    }
})

// check local storage for a name 

const username = localStorage.username ? localStorage.username : 'anon';

// class instances

const chatUI = new ChatUI(chatList);
const chatroom = new ChatRoom('gaming', 'shaun')

// update username 

newNameForm.addEventListener('submit', e=>{
    e.preventDefault();
    // update the name via chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.UpdateName(newName);
    // reset the form
    newNameForm.reset();
    // show and hide the update message
    updateMsg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMsg.innerText='', 3000)
});

// get chats and render

chatroom.getChats(data => chatUI.render(data));