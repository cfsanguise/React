import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import ThunkMiddleware  from 'redux-thunk';

const reducers = combineReducers({profilePage: profileReducer, dialogsPage: dialogsReducer, usersPage: usersReducer, auth: authReducer});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;