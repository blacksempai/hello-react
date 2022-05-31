import { connect } from "react-redux";
import PostForm from './PostForm';
import { addPost, changeNewPostText } from "../../../../../redux/profilePageReducer";

const mapStateToProps = (state) => {
    return { newPostText: state.profilePage.newPostText }
}

const PostFormContainer = connect(mapStateToProps, {addPost, changeNewPostText })(PostForm)

export default PostFormContainer;