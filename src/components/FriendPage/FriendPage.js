import './FriendPage.css';
import { useSelector } from 'react-redux';
import { getIcon } from '../../utilities/avatars';
import { useEffect, useState } from 'react';

const FriendPage = ({ id }) => {
  const friends = useSelector(state => state.friends)
  const [friend, setFriend] = useState({})

  useEffect(() => {
    setFriend(friends.find(friend => friend.id === id))
  }, [friends])

  return (
    <main className='friendGiftPage'>
      <header>
        {console.log(id)}
        <img src={getIcon(id)}></img>
      </header>
    </main>
  )
}

export default FriendPage;