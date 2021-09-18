import React from 'react';
import MessageTextArea from '../Send/MessageTextArea';
import Contact from './Contact/Contact';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let dialogs = state.dialogs.map(e => <Contact key={e.id + e.name} id={e.id} name={e.name}/>);
    let messages = state.messages.map(e => <Message key={e.message + 'msg'} message={e.message} />);
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
                <MessageTextArea store={props.store}  />
            </div>
        </div>
    );
}

export default Dialogs;