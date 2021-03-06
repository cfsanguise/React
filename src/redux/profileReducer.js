import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    posts: [{id:'thlrthl3', message:'Я пес', likes: 5000}, {id:'thlbfl3', message:'Я шаурма', likes: 50000}],
    profile: {
        fullName: null,
        lookingForAJob: null,
        github: null,
        photos: {big: null, small: null},
        status: ''
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
                message: action.currentPostText,
                likes: getRandomInt(50000)
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                currentPostText: ''
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

        case SET_STATUS: {
            return {...state, status: action.status}
        }

        default: {
            return state;
        }
    }
};

export const addPostActionCreator = currentPostText => ({type: ADD_POST, currentPostText});

export const setUserProfile = (userInfo) => {
    return {
        type: SET_USER_PROFILE,
        userInfo
    }
}

export const setStatus = status => {
    return {
        type: SET_STATUS,
        status
    }
}

export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getProfile = userId => 
    {return dispatch => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(response));
    });
}}

export const getStatus = userId => 
    {return dispatch => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response));
    });
}}

export const updateStatus = status => 
    {return dispatch => {
        profileAPI.updateStatus(status).then(response => {
            console.log(response);
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            }
    });
}}




export default profileReducer;