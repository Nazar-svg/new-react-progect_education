import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Seting from './components/Seting/Seting';
import './App.css';
import { Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';

const App = ({ state, dispatch, store }) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper_content">
          <Route path='/profile'
            render={() => <Profile
              dispatch={dispatch}
              profilePage={state.profilePage}
            />} />
          <Route
            path='/dialogs'
            render={() => <Dialogs
              dispatch={dispatch}
              store={store}
              state={state.dialogPage} />}
          />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/seting' ><Seting /></Route>
          <Route path='/friends'><Friends dialogs={state.dialogPage.dialogs} /></Route>
        </div>
      </div>);
}

export default App;
