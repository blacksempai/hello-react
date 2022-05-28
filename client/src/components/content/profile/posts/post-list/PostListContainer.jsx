import { connect } from 'react-redux';
import { addLikeActionCreator } from '../../../../../redux/profilePageReducer';
import PostList from './PostList';

const mapStateToProps = (state) => {
    return { posts: state.profilePage.posts }
}

const mapDispatchToProps = (dispatch) => {
    return {
        like: (id) => dispatch(addLikeActionCreator(id))
    }
}

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer;