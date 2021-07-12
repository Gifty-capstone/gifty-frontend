import './Form.css';
import otters from '../../assets/otters.png';
import { MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFriend } from '../../actions';

const Form = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  
  const [date, setDate] = useState('');
    const handleChange = (event) => {
      setName(event.target['name'] = event.target.value);
      setDate(event.target['date'] = event.target.value);
    }

  const handleSubmit = () => {
    dispatch(addFriend(name, date));
  }

  return (
    <>
      {showModal ? (
        <section className='form-background'>
          <section showModal={showModal} className='form-wrapper'>
            <img src={otters} alt='otters' className='form-img'></img>
            <div className='form-content'>
              <h1>New Friend Form</h1>
              <input type='text' className='form-name' placeholder='Full Name' onChange={handleChange} name='name'></input>
              <input type='date' className='form-date' onChange={handleChange} name='date'></input>
              <button className='form-button' onClick={handleSubmit}>Submit</button>
            </div>
            <MdClose aria-label='Close modal' className='close-form' onClick={() => setShowModal(prev => !prev)}/>
          </section>
        </section> 
      ) : null}
    </>
  )
}

export default Form;