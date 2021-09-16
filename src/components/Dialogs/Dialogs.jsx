import React from 'react';
import MessageTextArea from '../Send/postTextarea';
import Contact from './Contact/Contact';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    console.log(props);
    let dialogs = props.state.dialogs.map(e => <Contact key={e.id + e.name} id={e.id} name={e.name}/>);
    let messages = props.state.messages.map(e => <Message key={e.message + 'msg'} message={e.message} />);
    return (
        <div className={styles.dialogs_wrapper}>
            <div className={styles.contacts}>
               <h2 className={styles.header}>DIALOGS</h2> 
                <ul className={styles.chats}>
                    {dialogs}
                </ul>
            </div>
            <div className={styles.chat_wrapper}>
                <div className="message_wrappe">
                    {messages}
                </div>
                <MessageTextArea currentMessageText={props.state.currentMessageText} dispatch={props.dispatch} messageText={props.state.currentMessageText} />
            </div>
        </div>
    );
}

export default Dialogs;