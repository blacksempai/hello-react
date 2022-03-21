import classes from './MessageForm.module.css';
import sendImg from './send.png';

const MessageForm = (props) => {
    return (
        <div className={classes.messageFormWrapper}>
            <form action="">
                <input type="text" placeholder="Message" className={classes.messageField}/>
                <button className={classes.sendButton}><img src={sendImg} alt="Send" /></button>
            </form>
        </div>
    );
}

export default MessageForm;