import React from 'react'

const GiftForm = ({ userId, friendId }) => {
  const [giftIdea, setGiftIdea] = useState('')

  const inputGiftIdea = useRef();

  const handleChange = () => {
    setGiftIdea(inputGiftIdea)
  }

  const handleSubmit = () => {
    createNewGift();
    clearInput();
  }

  const createNewGift = () => {
    
  }

  const clearInput = () => {
    setGiftIdea('';)
  }

  return (
    <form>
      <input 
        onChange={handleChange} 
        ref={inputGiftIdea} 
        type='text' 
        placeholder='Gift idea'/>
      <button onClick={handleSubmit}>Save idea</button>
    </form>
  )
}

export default GiftForm