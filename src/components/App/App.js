import './App.css';
import { useDispatch } from 'react-redux';
import { addFriend } from '../../actions';
import React, { useState, useEffect } from 'react';
import AddFriend from '../AddFriend/AddFriend';
import Friends from '../Friends/Friends';
import Header from '../Header/Header';
import UpcomingBirthdays from '../UpcomingBirthdays/UpcomingBirthdays';
import { mockData } from '../../mockData';
import FriendPage from '../FriendPage/FriendPage';
import { Route, Switch } from 'react-router-dom';
import { getFriends } from '../../utilities/apiCalls';
import DayJS from 'react-dayjs';

const App = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    getFriends()
      .then(data => {
        const extractFriends = data.included.map(friend => friend.attributes);
        setUserName(data.data.attributes.name);
        dispatch(addFriend(extractFriends));
      })
  }, [])

  return (
    <main className='main'>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <>
              <div className='styling-header'>
                <Header userName={userName} />
              </div>
              <div className='styling-content'>
                <div className ='top-half'>
                  <UpcomingBirthdays />
                  <AddFriend />
                </div>
                <Friends />
              </div>
            </>
          )
        }} />

        <Route path="/:id" render={({match}) => {
          const { id } = match.params;

          return (
          <>
              <Header userName={userName} />
              <FriendPage id={id} />
          </>
          )
        }} />
      </Switch>
      </main>
  )
}

export default App;
