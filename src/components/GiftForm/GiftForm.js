import React, {useState, useRef} from 'react'
import { addGift } from '../../utilities/apiCalls';

const GiftForm = ({ userId, friendId, addNewGift }) => {
  const [giftIdea, setGiftIdea] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setGiftIdea(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewGift();
    clearInput();
  }

  const createNewGift = () => {
    addGift(userId, friendId, giftIdea, "none", "pending")
      .then(data => addNewGift(data.data))
      .catch(error => setError(true))
  }

  const clearInput = () => {
    setGiftIdea('')
  }

  return (
    <form>
      <input 
        onChange={(e) => handleChange(e)} 
        value={giftIdea} 
        type='text' 
        placeholder='Gift idea'/>
      <button onClick={(e) => handleSubmit(e)}>Save idea</button>
      {error && 
      <p>Your gift could not be added at this time. Please try again.</p>}
    </form>
  )
}

export default GiftForm