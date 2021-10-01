const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
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

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            console.log(...state.isFollowingInProgress);
            return {...state, isFollowingInProgress: action.isFetching ? [...state.isFollowingInProgress, action.userId] : state.isFollowingInProgress.filter(id => id !== action.userId)}
        }

        default: {
            return state;
        }
    }
};

export const follow = userId => ({type: FOLLOW, userId});
  
export const unfollow = userId => ({type: UNFOLLOW, userId});

export const setUsers = users => ({type: SET_USERS, users});

export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, page});

export const setTotalCount = num => ({type: SET_TOTAL_COUNT, num});

export const toggleIsFetching = (userId) => ({type: TOGGLE_IS_FETCHING, userId});

export const toggleIsFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId})


export default usersReducer;