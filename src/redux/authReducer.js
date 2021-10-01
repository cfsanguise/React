const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_USER_DATA = 'SET-USER=DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default: {
            return state;
        }
    }
};

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});

export default authReducer;