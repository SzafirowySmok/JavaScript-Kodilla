import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import {addComment} from './actions';

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);
