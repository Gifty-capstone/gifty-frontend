import React, {useState} from 'react'
import './AddFriend.css'
import Form from '../Form/Form.js';
// import { FaPlus } from "react-icons/fa";
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const AddFriend = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <section className='add-friend'>
      <article className='add-section'>
        <Icon className='fa fa-plus' onClick={openModal} style={{ fontSize: 60 }}></Icon>
        <Typography variant="srOnly">Add a friend</Typography>
        <label className='plus-label'>Add a friend</label>
      </article>
      <Form showModal={showModal} setShowModal={setShowModal} />
    </section>
  )
}

export default AddFriend;
