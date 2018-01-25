import React from 'react';
const Comment = ({text, votes, id, thumbUp, thumbDown, removeComment}) => 
<li>
    {text} 
    <span> votes: {votes}</span>
    <button onClick={() => thumbUp(id)}>Thumb up</button>
    <button onClick={() => thumbDown(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove</button>
</li>;

export default Comment;
