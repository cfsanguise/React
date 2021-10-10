const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [{id:'igor', name:'Igor'}, {id:'BRAT', name:'BRAT'}, {id:'semen', name:'Semen'}, {id:'ron', name:'Ronaldo'}, {id:'tcock', name:'Tim cock'}],
    messages: [{id:'zzfe4', message:'Yo wassup'}, {id:'ger7', message:'React is the shit'}],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {id:'zzfe4', message: action.currentMessageText};
            return {
                ...state,
                messages: [...state.messages, newMessage],
                currentMessageText: ''
            };
        }


        default: {
            return state;
        }
    }
};

export const sendMessageCreator = currentMessageText => ({type: SEND_MESSAGE, currentMessageText});
  

export default dialogsReducer;