
import state, { subscribe } from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { addPost, updateNewPostText } from './state/state';
import App from './App';


 const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        updateNewPostText={updateNewPostText}
        addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireTree(state);
subscribe(renderEntireTree);


