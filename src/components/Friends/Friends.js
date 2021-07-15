import './Friends.css';
import { useSelector } from 'react-redux';
import { getIcon } from '../../utilities/avatars';
import { Link } from 'react-router-dom';

const Friends = () => {
  const friends = useSelector(state => state.friends)
  // console.log(friends)
  const friendList = friends.map(friend => {
    return (
      <Link to={`/${friend.id}`} className='friend' key={friend.id}>
        <img src={getIcon(friend.id)} alt='friend avatar'></img>
        <h2>{friend.name}</h2>
      </Link>
    )
  })

  return (
    <section>
      <h1>Your Friends</h1>
      {friendList}
    </section>
  )
}

export default Friends;
