import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Seting from './components/Seting/Seting';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper_content">
        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
        <Route  path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/seting' component={Seting}/>

      </div>
    </div>
    </BrowserRouter>);
}

export default App;
