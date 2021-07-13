import './Friends.css';
import { useSelector } from 'react-redux';
import { getIcon } from '../../utilities/avatars';

const Friends = () => {
  const friends = useSelector(state => state.friends)
  // console.log(friends)

  const friendList = friends.map(friend => {
    return (
      <article className='friend' key={friend.id}>
        {console.log(friends[1])}
        <img src={getIcon(friend.id)} alt='friend avatar'></img>
        <h2>{friend.name}</h2>
      </article>
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