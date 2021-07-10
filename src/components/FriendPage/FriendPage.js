import './FriendPage.css';
import { useSelector } from 'react-redux';
import { getIcon } from '../../utilities/avatars';
import { useEffect, useState } from 'react';

const FriendPage = ({ id }) => {
  const friends = useSelector(state => state.friends)
  const [friend, setFriend] = useState({})

  useEffect(() => {
    console.log(friends)
    setFriend(friends.find(friend => parseInt(friend.id) === id))
  }, [friends])

  return (
    <main className='friendGiftPage'>
      <header>
        <img src={getIcon(id)}></img>
        <h1>{friend.name}</h1>
        <h2>{friend.birthday}</h2>
        <p>{friend.memo}</p>
      </header>

    </main>
  )
}

export default FriendPage;