const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [{id:'thlrthl3', message:'Я пес', likes: 5000}, {id:'thlbfl3', message:'Я шаурма', likes: 50000}],
            currentPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [{id:'igor', name:'Igor'}, {id:'BRAT', name:'BRAT'}, {id:'semen', name:'Semen'}, {id:'ron', name:'Ronaldo'}, {id:'tcock', name:'Tim cock'}],
            messages: [{id:'zzfe4', message:'Yo wassup'}, {id:'ger7', message:'React is the shit'}],
            currentMessageText: ''
        },
    },

    _callSubscriber() {

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; // Паттерн наблюдатель
    },

    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.currentPostText,
                likes: this.getRandomInt(5000)
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.currentPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.currentPostText = action.postText;
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.currentMessageText = action.dialogsPage.messageText;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {id:'zzfe4', message: this._state.dialogsPage.currentMessageText};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.currentMessageText = '';
            this._callSubscriber();
        }  
    },

    getRandomInt(max) { // Конспектани чувак, пора вжеа
        return Math.floor(Math.random() * max);
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextCreator = (postText) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      postText: postText
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
  
export const updateMessageTextCreator = (currentMessageText) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      currentMessageText: currentMessageText
    }
}

export default store;

window.store = store;