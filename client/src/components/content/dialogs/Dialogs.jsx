import classes from './Dialogs.module.css';
import DialogListContainer from './dialog-list/DialogListContainer';
import MessangesContainer from './messanges/MessangesContainer';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs_grid}>
            <DialogListContainer />
            <MessangesContainer />
        </div>
    );
}

export default Dialogs;