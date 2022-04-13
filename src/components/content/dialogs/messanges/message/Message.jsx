import classes from './Message.module.css';

const Messange = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.author}>
                <img src="http://placekitten.com/g/50/50" alt="ava" />
                <p>{props.author}</p>
            </div>    
            <div className={classes.text}>
                <p>{props.text}</p>
            </div>
        </div>
    ); 
}

export default Messange;