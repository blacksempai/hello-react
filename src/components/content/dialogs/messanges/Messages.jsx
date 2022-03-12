import classes from './Messages.module.css';
import Messange from './message/Message';

const Messanges = () => {
    return (
        <div className={classes.messanges}>
           <Messange author="Andriy" content="Hello!" />
           <Messange author="Anya" content="Hi!" />
        </div>
    ); 
}

export default Messanges;