import './FriendPage.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIcon } from '../../utilities/avatars';
import { useEffect, useState } from 'react';
import { removeFriend } from '../../actions';
import Error from '../Error/Error';
import { Link } from 'react-router-dom';
import GiftList from '../GiftList/GiftList';
import GiftForm from '../GiftForm/GiftForm';
import { deleteFriendRecord, deleteGift, getGifts, markGiftPurchased } from '../../utilities/apiCalls';
import DayJS from 'react-dayjs';

const FriendPage = ({ userId, id }) => {
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friends)
  const [friend, setFriend] = useState({})
  const [showForm, setForm] = useState(false)
  const [active, setStatus] = useState(true)
  const [friendExists, setFriendExist] = useState(true)
  const [gifts, setGifts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const selectedFriend = friends.find(friend => friend.id === parseInt(id))
    if (selectedFriend) {
    setFriend(selectedFriend)
    setFriendExist(true)
  } else {
    setFriendExist(false)
  }
  }, [friends, id])

  useEffect(() => {
    getGifts(userId, id)
      .then(data => setGifts(data.included)
      )
      .catch(error => setError(true))
  },[]);

  const addNewGift = (gift) => {
    setGifts([...gifts, gift])
  }

  const purchaseGift = (giftId) => {
    markGiftPurchased(userId, id, giftId )
      .then(data => {
        const newGiftList = gifts.map(gift => {
          if (gift.id === giftId) {
            gift.attributes.status = 'purchased'
           return gift
          } else {
            return gift
          }
      }
      )
      setGifts(newGiftList)
    })
    .catch(error => setError(true))
}

  const deleteFriend = () => {
    deleteFriendRecord(userId, id)
      .then(data => setStatus(false))
      .then(data => dispatch(removeFriend(friend)))
      .catch(error => setError(true))
  }

  const removeGift = (giftId) => {
    const updatedGifts = gifts.filter(gift => gift.id !== giftId)
    deleteGift(1, id, giftId)
      .then(data => setGifts(updatedGifts))
      .catch(error => setError(true))
  }

  if (friendExists && active) {
    return (
      <>
      <section className={'friend-gift-page'}>
        <div className='top-section' >
          <section className="friend-info">
            <img className='avatar' alt='friend avatar' src={getIcon(id)}></img>
            <div className='friend-details'>
              <h1 className='name'>{friend.name}</h1>
              <h2 className='bday'>
                {friend.birthday &&
                <DayJS format="MMMM D">{friend.birthday}</DayJS> }
              </h2>
              <p className='memo'>{friend.memo}</p>
            </div>
          </section>
          <section className='add-a-gift'>
            <i className='fas fa-plus fa-3x' onClick={() => setForm(true)}></i>
            <h3 className='add-text'>Add a gift idea for {friend.name}</h3>
            {showForm && <GiftForm userId={1} friendId={id} addNewGift={addNewGift}/>}
          </section>
          </div>
        <section className='gift-list'>
          {!error &&
          <GiftList gifts={gifts} removeGift={removeGift} purchaseGift={purchaseGift}></GiftList> }
          {error &&
          <p className='error-msg'>Oh no, something went wrong. Please refresh the page and try again.</p>}
        </section>
        <div className='buttons'>
          <Link to={'/'}><button className='button'>Back to main</button></Link>
          <button className='button' onClick={deleteFriend}>Delete friend</button>
        </div>
      </section>
      </>
    )
    } else if (!friendExists && active) {
      return (
      <Error error={`This page does not exist. Click button to go back to main page.`} />
      )
    } else if (!active) {
      return (
      <Error error={`This friend has been deleted. Hope you're okay.`} />
      )
    }
}

export default FriendPage;
