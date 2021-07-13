import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from '../../actions';
import React, { useState, useEffect } from 'react';
import AddFriend from '../AddFriend/AddFriend';
import Friends from '../Friends/Friends';
import Header from '../Header/Header';
import UpcomingBirthdays from '../UpcomingBirthdays/UpcomingBirthdays';
import { mockData } from '../../mockData';
import FriendPage from '../FriendPage/FriendPage';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(mockData.data.attributes);
    dispatch(addFriend(mockData.data.relationships.friends.data));
  }, [])

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <React.Fragment>
              <Header user={user} />
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
