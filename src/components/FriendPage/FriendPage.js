import './FriendPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { getIcon } from '../../utilities/avatars';
import { useEffect, useState } from 'react';
import { removeFriend } from '../../actions';

const FriendPage = ({ id }) => {
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friends)
  const [friend, setFriend] = useState({})
  const [showForm, setForm] = useState(false)
  const [active, setStatus] = useState(true)

  useEffect(() => {
    const selectedFriend = friends.find(friend => parseInt(friend.id) === id)
    if (selectedFriend) {
    setFriend(selectedFriend)
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
      <main className='friend-gift-page'>
        <header>
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
      </main>
    )
    } else if (friend && !active) {
      return (
        <main>
          <h1>This friend has been successfully deleted. Ouch, hope you're okay.</h1>
          <button>Return to main</button>
        </main>
      )
    }
      else {
      return (
        <main>
          <h1>Oh no, this friend could not be found. Please return to the main dashboard and try again.</h1>
          <button>Return to main</button>
        </main>
      )
    }
}

export default FriendPage;