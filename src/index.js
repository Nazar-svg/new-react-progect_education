import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const posts = [
  { id: 1, message: 'what, you doing?', likesCount: '7' },
  { id: 2, message: 'what, you problem?', likesCount: '12' }
];
const dialogs = [
  { id: 1, name: 'Nazar' },
  { id: 2, name: 'Dima' },
  { id: 3, name: 'Angelina' },
  { id: 4, name: 'Svetik' },
  { id: 5, name: 'Yosuf' }
];
const messages = [
  { id: 1, post: 'Hi!!' },
  { id: 2, post: 'What you doing todey?' },
  { id: 3, post: 'Yo' },
  { id: 4, post: 'Yo' }
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
