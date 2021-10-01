import React from 'react';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className='content'>
          <Route path='/dialogs' render={() => <DialogsContainer />}  />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
