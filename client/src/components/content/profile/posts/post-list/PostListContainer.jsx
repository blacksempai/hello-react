import { connect } from 'react-redux';
import PostList from './PostList';
import { addLike } from '../../../../../redux/profilePageReducer';

const mapStateToProps = (state) => {
    return { posts: state.profilePage.profile.posts }
}

const PostListContainer = connect(mapStateToProps, { addLike })(PostList)

export default PostListContainer;