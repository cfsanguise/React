import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },

    getRandomInt(max) { // Конспектани чувак, пора вжеа
        return Math.floor(Math.random() * max);
    }

}

export default store;

window.store = store;