import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
import CommentForm from './CommentFormContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className={"App"}>
      <CommentForm />
      <CommentsList />
      <DevTools />
    </div>
  );
};

export default App;
