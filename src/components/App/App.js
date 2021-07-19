import './App.css';
import { useDispatch } from 'react-redux';
import { addFriend, loadFriends } from '../../actions';
import React, { useState, useEffect } from 'react';
import AddFriend from '../AddFriend/AddFriend';
import Friends from '../Friends/Friends';
import Header from '../Header/Header';
import UpcomingBirthdays from '../UpcomingBirthdays/UpcomingBirthdays';
// import { mockData } from '../../mockData';
import FriendPage from '../FriendPage/FriendPage';
import { Route, Switch } from 'react-router-dom';
import { getFriends } from '../../utilities/apiCalls';
// import DayJS from 'react-dayjs';
import Error from '../Error/Error';

const App = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    getFriends(userId)
      .then(data => {
        const extractFriends = data.included.map(friend => friend.attributes);
        setUserName(data.data.attributes.name);
        dispatch(addFriend(extractFriends));
        // dispatch(loadFriends(extractFriends));
      })
      .catch(error => setError(true))
  }, [])

  if (!error && userName) {
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
                  <AddFriend userId={userId}/>
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
              <FriendPage userId={userId} id={id} />
          </>
          )
        }} />
      </Switch>
      </main>
  )
  } else if (!error && !userName) {
    return (
      <h2>Your gift info is on the way...</h2>
    )
  } else {
    return (
      <Error error={'Something went wrong. Please try again.'} />
    )
  }
}

export default App;
