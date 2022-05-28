import { connect } from 'react-redux';
import DialogList from './DialogList';


const mapStateToProps = (state) => {
    return {dialogs: state.dialogPage.dialogs}
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList);

export default DialogListContainer;