import classes from './Messages.module.css';
import Messange from './message/Message';

const Messanges = (props) => {
    let messangeItems = props.data.map(msg => <Messange author={msg.author} content={msg.content} />);
    return (
        <div className={classes.messanges}>
            {messangeItems}
        </div>
    ); 
}

export default Messanges;