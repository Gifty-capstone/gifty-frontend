import React, {useState} from 'react'
import './AddFriend.css'
import Form from '../Form/Form.js';
import { FaPlus } from "react-icons/fa";

const AddFriend = ({ userId }) => {
  const [showmodal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <section className='add-friend'>
      <article className='add-section'>
        <FaPlus className='fa fa-plus' onClick={openModal}/>
        <label className='plus-label'>Add a friend</label>
      </article>
      {showmodal &&
      <Form userId={userId} showmodal={showmodal} setShowModal={setShowModal} />}
    </section>
  )
}

export default AddFriend;
