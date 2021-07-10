import './UpcomingBirthdays.css';
import { useSelector } from 'react-redux';

const UpcomingBirthdays = () => {
  const friends = useSelector(state => state.friends);
  const upcomingBirthdays = friends.filter(friend => {
    const today = new Date();
    const monthFromToday = new Date(today.getTime() + 30*24*60*60*1000);
    const currentDate = today.toISOString().split('T')[0];
    const currentMonthFromToday = monthFromToday.toISOString().split('T')[0];
    return friend.birthday > currentDate && friend.birthday < currentMonthFromToday
  })
  
}

export default UpcomingBirthdays;
