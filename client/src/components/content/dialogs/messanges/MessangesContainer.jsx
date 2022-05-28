import Messanges from './Messages';
import { connect } from 'react-redux';
import { changeNewMessageTextActionCreator } from '../../../../redux/dialogPageReducer';
import { addMessageActionCreator } from './../../../../redux/dialogPageReducer';

const mapStateToProps = (state) => {
    return {
        messanges: state.dialogPage.messanges,
        newMessageText: state.dialogPage.newMessageText
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (text) => dispatch(changeNewMessageTextActionCreator(text)),
        addMessage: ()=> {dispatch(addMessageActionCreator())}
    }
}

const MessangesContainer = connect(mapStateToProps, mapDispatchToProps)(Messanges);

export default MessangesContainer;