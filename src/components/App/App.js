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
import { getFriends } from '../../apiCalls';

const App = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState([]);

  // useEffect(() => {
  //   setUserName(mockData.data.attributes.name);
  //   dispatch(addFriend(mockData.data.relationships.friends.data));
  // }, [])

  useEffect(() => {
    getFriends()
      .then(data => {
        console.log(data)
      })
  }, [])

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <React.Fragment>
              <Header userName={userName} />
              <UpcomingBirthdays />
              <AddFriend />
              <Friends />
            </React.Fragment>
          )
        }} />

        <Route path="/:id" render={({match}) => {
          const { id } = match.params;
          return <FriendPage id={id} />
        }} />
      </Switch>
    </main>
  )
}

export default App;
