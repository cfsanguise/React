import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />}  />
          <Route path='/profile' render={() => <Profile dispatch={props.dispatch} profilePage={props.state.profilePage} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
