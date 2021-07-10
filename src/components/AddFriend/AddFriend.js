import React, {useState} from 'react'
import './AddFriend.css'
import Form from '../Form/Form.js'

const AddFriend = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    //toggling it back and forth
    setShowModal(prev => !prev)
  }
  return (
    <section className='add-friend'>
      <button className='add-friend-button' onClick={openModal}>Add Friend</button>
      <Form showModal={showModal} setShowModal={setShowModal} />
    </section>
  )
}


export default AddFriend;