import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUp, thumbDown, removeComment} from './actions';
const mapDispatchToProps = dispatch => ({
    thumbUp: (id) => dispatch(thumbUp(id)),
    thumbDown: (id) => dispatch(thumbDown(id)),
    removeComment: (id) => dispatch(removeComment(id))
});
export default connect(null, mapDispatchToProps)(Comment);