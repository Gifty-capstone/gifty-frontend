import './FriendPage.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIcon } from '../../utilities/avatars';
import { useEffect, useState } from 'react';
import { removeFriend } from '../../actions';
import Error from '../Error/Error';
import { Link } from 'react-router-dom';
import GiftList from '../GiftList/GiftList';

const FriendPage = ({ id }) => {
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friends)
  const [friend, setFriend] = useState({})
  const [showForm, setForm] = useState(false)
  const [active, setStatus] = useState(true)
  const [friendExist, setFriendExist] = useState(true)

  useEffect(() => {
    const selectedFriend = friends.find(friend => friend.id === id)
    if (selectedFriend) {
    setFriend(selectedFriend)
    setFriendExist(true)
  } else {
    setFriendExist(false)
  }
  }, [friends, id])

  const displayForm = () => {
    return (
      <form>
        <input type='text' placeholder='Gift idea'/>
        <button>Save idea</button>
      </form>
    )
  }

  const deleteFriend = () => {
    dispatch(removeFriend(friend))
    setStatus(false)
  }

  if (friend && active) {
    return (
      <React.Fragment>
      {!friendExist && <Error error={`This page does not exist. Click button to go back to main page.`} />}
      <main className={friendExist ? 'friend-gift-page' : 'hidden'}>
        <header>
          <Link to={'/'}><button>Go back to home page</button></Link>
          <img src={getIcon(id)}></img>
          <h1>{friend.name}</h1>
          <h2>{friend.birthday}</h2>
          <p>{friend.memo}</p>
          <button onClick={() => deleteFriend()}>Delete {friend.name} from friends</button>
        </header>
        <section className='add-a-gift'>
          <i className='fas fa-plus fa-3x' onClick={() => setForm(true)}></i>
          <h3>Add a gift idea</h3>
          {showForm && displayForm()}
        </section>
        <section className='gift-list'>
          <GiftList id={id}></GiftList>
        </section>
      </main>
      </React.Fragment>
    )
    } else if (friend && !active) {
      return (
        <main>
          <h1>This friend has been successfully deleted. Ouch, hope you're okay.</h1>
          <Link to={'/'}><button>Return to main</button></Link>
        </main>
      )
    }
}

export default FriendPage;
