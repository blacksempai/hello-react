import classes from './Messages.module.css';
import Messange from './message/Message';
import MessageForm from './message-form/MessageForm';

const Messanges = (props) => {
    let messangeItems = props.messanges.map(msg => <Messange author={msg.author} text={msg.text} />);
    return (
        <div className={classes.messagesContainer}>
            <div className={classes.messanges}>
                {messangeItems}
            </div>
            <MessageForm newMessageText={props.newMessageText} changeText={props.changeText} addMessage={props.addMessage}/>
        </div>
    );
}

export default Messanges;