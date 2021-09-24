const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [{id:'thlrthl3', message:'Я пес', likes: 5000}, {id:'thlbfl3', message:'Я шаурма', likes: 50000}],
    currentPostText: ''
}

export const profileReducer = (state = initialState, action) => {

    const getRandomInt = (max) => { // Конспектани чувак, пора вжеа
        return Math.floor(Math.random() * max);
    }

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.currentPostText,
                likes: getRandomInt(50000)
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                currentPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                currentPostText: action.postText
            }
        }


        default: {
            return state;
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextCreator = (postText) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      postText: postText
    }
}

export default profileReducer;