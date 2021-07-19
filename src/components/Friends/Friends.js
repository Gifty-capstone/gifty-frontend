import './Friends.css';
import { useSelector } from 'react-redux';
import { getIcon } from '../../utilities/avatars';
import { Link } from 'react-router-dom';

const Friends = () => {
  const friends = useSelector(state => state.friends);
  const friendList = friends.map(friend => {
    
    return (
      <Link to={`/${friend.id}`} className='friend' key={friend.id}>
        <img src={getIcon(friend.id)} alt='friend avatar' className='avatar'></img>
        <h2 className='friend-name' id={friend.id}>{friend.name}</h2>
      </Link>
    )
  })

  return (
    <section className='friends'>
      <h1 className='list-title'>Friends</h1>
      <div className='friend-list'>
        {friendList}
      </div>
    </section>
  )
}

export default Friends;
