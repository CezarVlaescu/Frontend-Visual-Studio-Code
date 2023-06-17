// Firebase by Google

// Website work with data : blog posts, todos, comments
// SQL databases : tables, rows, columns
// NoSQL databases : collections, documents, proprities

// How NoSQL databases work : 

// Database instance 

// Blogs  -------> Blogs Collections

// Comments -----> document (xgdfer) -------> Document {title: 'cezar', likes: 50, author:'vlaescu'} -> objects
// Users --------> document (fjdfghi)

// Create a database using FireStore : Create a new project -> Go to Dashboard -> Build -> Firestore DB -> Create new collection and create new document 
// To get the the firebase for your project we go to project overview

const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('.button');


const addRecepie = (recepie, id) => {
    let time = recepie.created_at.toDate();
    let html = `<li data-id="${id}"><div>${recepie.title}</div><div>${time}</div><button>Delete</button></li>`; list.innerHTML += html;
}; // for every document we get back, we append that html, we store the ID of every recepie in the li tag

const deleteRecepie = (id) => {
    const recipies = document.querySelectorAll('li');
    recipies.forEach(recepie => {
        if(recepie.getAttribute('data-id') === id){
            recepie.remove();
        }
    })
}

// get document (realtime listener edition)

db.collection('recepies').onSnapshot(snapshot => { // everytime something changes, we change in realtime without refreshing the page
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added'){
            addRecepie(doc.data(), doc.id);
        } else if( change.type === 'removed'){
            deleteRecepie(doc.id);
        }
    })
})

// get document

const unsub = db.collection('recepies').get().then((snapshot) => {
    //when we have the data
    snapshot.docs.forEach((doc)=>addRecepie(doc.data(), doc.id));
}).catch((err)=>{
    console.log(err);
}) // reference to the database from firebase(async task, sometimes to complete) 

// unsubscribe from database changes

button.addEventListener('click', () => {
    unsub();
})


// add documents

form.addEventListener('submit', e=>{ // submit is for add
    e.preventDefault();

    const now = new Date(); // when the recepie was added
    const recepie = {
        title: form.recepie.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('recepies').add(recepie).then(()=>{ // then is associated with async
        alert("added");
    }).catch((err) => {
        console.log(err);
    }); // new document to the colection
});

// delete documents 

list.addEventListener('click', e => { // click is for delete
    e.preventDefault();

    if(e.target.tagName === 'button') // if the target is a button
    {
        const id = e.target.parentElement.getAttribute('data-id'); // goes to the parent and get the id of the recepie
        db.collection('recepies').doc(id).delete().then(() => {
            alert('deleted')
        }).catch((err) => {
            console.log(err);
        });
    }
});

