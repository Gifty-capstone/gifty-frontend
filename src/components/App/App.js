import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import AddFriend from '../AddFriend/AddFriend';
import Friends from '../Friends/Friends';
import Header from '../Header/Header';
import UpcomingBirthdays from '../UpcomingBirthdays/UpcomingBirthdays';

function App() {
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
