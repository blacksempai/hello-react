import { connect } from "react-redux";
import PostForm from './PostForm';
import { addPostActionCreator, changeNewPostTextActionCreator } from './../../../../../redux/profilePageReducer';

const mapStateToProps = (state) => {
    return { newPostText: state.profilePage.newPostText }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        textChanged: (text) => dispatch(changeNewPostTextActionCreator(text))
    }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default PostFormContainer;