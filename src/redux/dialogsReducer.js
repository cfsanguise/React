const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [{id:'igor', name:'Igor'}, {id:'BRAT', name:'BRAT'}, {id:'semen', name:'Semen'}, {id:'ron', name:'Ronaldo'}, {id:'tcock', name:'Tim cock'}],
    messages: [{id:'zzfe4', message:'Yo wassup'}, {id:'ger7', message:'React is the shit'}],
    currentMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {id:'zzfe4', message: state.currentMessageText};
            return {
                ...state,
                messages: [...state.messages, newMessage],
                currentMessageText: ''
            };
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                currentMessageText: action.currentMessageText
            };
        }

        default: {
            return state;
        }
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
  
export const updateMessageTextCreator = (messageText) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      currentMessageText: messageText
    }
}

export default dialogsReducer;