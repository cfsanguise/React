const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL-COUNT';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW: {
            return {...state, users: state.users.map( user => {
                if (user.id === action.userId) {
                    return {...user, followed: true};
                }
                return user;
            })};
        }

        case UNFOLLOW: {
            return {...state, users: state.users.map( user => {
                if (user.id === action.userId) {
                    return {...user, followed: false};
                }
                return user;
            })};
        }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]};
        }

        case SET_CURRENT_PAGE: {
            return {...state, users: [], currentPage: action.page};
        }

        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.num};
        }

        default: {
            return state;
        }
    }
};

export const followAc = userId => ({type: FOLLOW, userId});
  
export const unfollowAc = userId => ({type: UNFOLLOW, userId});

export const setUsersAc = users => ({type: SET_USERS, users});

export const setCurrentPageAc = page => ({type: SET_CURRENT_PAGE, page});

export const setTotalCountAc = num => ({type: SET_TOTAL_COUNT, num});


export default usersReducer;