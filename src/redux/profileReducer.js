const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
    posts: [{id:'thlrthl3', message:'Я пес', likes: 5000}, {id:'thlbfl3', message:'Я шаурма', likes: 50000}],
    currentPostText: '',
    profile: {
        fullName: null,
        lookingForAJob: null,
        github: null,
        photos: {big: null, small: null},
        aboutMe: null
    },
    isFetching: false
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

        case SET_USER_PROFILE: {
            return {...state, profile: {
                fullName: action.userInfo.fullName,
                lookingForAJob: action.userInfo.lookingForAJob,
                photos: {big: action.userInfo.photos.large, small: action.userInfo.photos.small},
                github: action.userInfo.contacts.github,
                aboutMe: action.userInfo.aboutMe
            }};
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
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

export const setUserProfile = (userInfo) => {
    console.log(userInfo);
    return {
        type: SET_USER_PROFILE,
        userInfo
    }
}

export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});

export default profileReducer;