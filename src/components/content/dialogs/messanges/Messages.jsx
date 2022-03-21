import classes from './Messages.module.css';
import Messange from './message/Message';
import MessageForm from './message-form/MessageForm';

const Messanges = (props) => {
    let messangeItems = props.data.map(msg => <Messange author={msg.author} content={msg.content} />);
    return (
        <div className={classes.messagesContainer}>
            <div className={classes.messanges}>
                {messangeItems}
            </div>
            <MessageForm />
        </div>
    );
}

export default Messanges;