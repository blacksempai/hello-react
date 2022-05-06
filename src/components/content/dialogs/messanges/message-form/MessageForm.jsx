import React from 'react';
import classes from './MessageForm.module.css';
import sendImg from './send.png';
import { addMessageActionCreator, changeNewMessageTextActionCreator } from './../../../../../redux/dialogPageReducer';

const MessageForm = (props) => {
    const messageRef = React.createRef();

    const messageSubmit = (e) => {
        e.preventDefault();
        props.dispatch(addMessageActionCreator());
    }

    const textChanged = () => {
        let text = messageRef.current.value;
        props.dispatch(changeNewMessageTextActionCreator(text));
    }

    return (
        <div className={classes.messageFormWrapper}>
            <form onSubmit={messageSubmit}>
                <input type="text" placeholder="Message" className={classes.messageField} ref={messageRef} onChange={textChanged} value={props.newMessageText}/>
                <button className={classes.sendButton}><img src={sendImg} alt="Send"/></button>
            </form>
        </div>
    );
}

export default MessageForm;