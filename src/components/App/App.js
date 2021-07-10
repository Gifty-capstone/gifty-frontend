import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from '../../actions';
import React, { useEffect } from 'react';
import AddFriend from '../AddFriend/AddFriend';
import Friends from '../Friends/Friends';
import Header from '../Header/Header';
import UpcomingBirthdays from '../UpcomingBirthdays/UpcomingBirthdays';
import { mockData } from '../../mockData';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(addFriend(mockData.data.relationships.friends.data)))

  return (
    <main>
      <Header />
      <UpcomingBirthdays />
      <AddFriend />
      <Friends />
    </main>
  )
}

export default App;
