// 1. adding new chat documents -> done! 
// 2. setting up a real-time listener to get new chats -> done!
// 3. update the username -> done!
// 4. update the room -> done!

// 1.
class ChatRoom {
    constructor(room, username){
        this.room = room;
        this.username = username; // the instance of the arguments
        this.chats = db.collection('chats'); // reference to firestore from html
        this.unsub;
    }
    async addChat(message){ // async function
        // format a chat object
        const now = new Date(); 
        const chat = { // the template of the object
            message,
            username : this.username,
            room : this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document
        const response = await this.chats.add(chat); // await for the async function
        return response;
    }
    // 2.
    getChats(callback){
        this.unsub = this.chats.where('room', '==', this.room) // looking for a specific room and attached this listener
        .orderBy('created_at') // order by timestamp 
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change => {
                if (change.type ==='added'){
                    // update the UI
                    callback(change.doc.data());
                }
            });
        });
    };
    // 3. + 4.
    updateName(username){
        this.username = username; // will update the username
        localStorage.setItem('username', username);
    }
    updateRoom(room){
        this.room = room; // will update the room
        if(this.unsub){
            this.unsub();
        }
    }
}



// setTimeout(() => {
//     chatroom.updateRoom('general');
//     chatroom.updateName('sebi');
//     chatroom.getChats(data => console.log(data));
// }, 3000)