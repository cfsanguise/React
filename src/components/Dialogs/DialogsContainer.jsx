import React from 'react';
import Contact from './Contact/Contact';
import Dialogs from './Dialogs';
import Message from './Message/Message';
import { sendMessageCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';
import { compose } from 'redux';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function scroll() {
    setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);
    }, 100)
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs.map(e => <Contact key={e.id + e.name} id={e.id} name={e.name}/>),
        messages: state.dialogsPage.messages.map(e => <Message key={e.message + 'msg' + getRandomInt(50000)} message={e.message} />),
        isAuth: state.auth.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: currentMessageText => { dispatch(sendMessageCreator(currentMessageText)); scroll() },
    }    
};

export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);;