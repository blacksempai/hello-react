import React from 'react';
import classes from './MessageForm.module.css';
import sendImg from './send.png';

const MessageForm = (props) => {
    const messageRef = React.createRef();
    const messageSubmit = () => {
        let message = messageRef.current.value;
        alert(message);
    }

    return (
        <div className={classes.messageFormWrapper}>
            <form onSubmit={messageSubmit}>
                <input type="text" placeholder="Message" className={classes.messageField} ref={messageRef}/>
                <button className={classes.sendButton}><img src={sendImg} alt="Send"/></button>
            </form>
        </div>
    );
}

export default MessageForm;