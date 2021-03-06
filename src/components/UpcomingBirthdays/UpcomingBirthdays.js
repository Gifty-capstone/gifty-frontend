import './UpcomingBirthdays.css';
import { useSelector } from 'react-redux';
import { FaGift } from 'react-icons/fa';
import DayJS from 'react-dayjs';

const UpcomingBirthdays = () => {
  const friends = useSelector(state => state.friends);

  const upcomingBirthdays = friends.filter(friend => {
    const today = new Date();
    const monthFromToday = new Date(today.getTime() + 30*24*60*60*1000);
    const currentDate = today.toISOString().split('T')[0];
    const currentMonthFromToday = monthFromToday.toISOString().split('T')[0];
    
    return friend.birthday > currentDate && friend.birthday < currentMonthFromToday
  });

  const sortedBirthdays = upcomingBirthdays.sort((a, b) => new Date(a.birthday) - new Date(b.birthday));

  const relevantBirthdays = sortedBirthdays.map(friend => {
    return (
      <article key={friend.id} className='upcoming'>
        <ul className='name-area'>
          {!friend.need_gift &&
          <div className='check-area'>
            <FaGift className='check' />
            <p>{friend.name}</p>
          </div>}
          {friend.need_gift && <li>{friend.name}</li>}
          {friend.birthday &&
            <li>
              <DayJS format='MMMM D'>{friend.birthday}</DayJS>
              </li>
          }
          </ul>
      </article>
    )
  })

  return (
    <section className='birthday-area'>
      <h3 className='upcoming'>Upcoming Birthdays:</h3>
      {relevantBirthdays}
    </section>
  )
}

export default UpcomingBirthdays;
