import React, {useState, useRef} from 'react'
import { addGift } from '../../utilities/apiCalls';

const GiftForm = ({ userId, friendId, addNewGift }) => {
  const [giftIdea, setGiftIdea] = useState('')

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
      .then(data => addNewGift({
        "attributes": {
            "name": giftIdea,
        }}))
      .catch(error => console.log(error))
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
    </form>
  )
}

export default GiftForm