import './Form.css';
import otters from '../../assets/otters.png';
import { MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFriend } from '../../actions';

const Form = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [date, setDate] = useState('');

  const [friend, setFriend] = useState({})

  const handleChange = (event) => {
    // setName(event.target['name'] = event.target.value);
    // setDate(event.target['date'] = event.target.value);
  }

  //Hook for controlled forms
  // birthday, name, memo
  // add memo to form && form labels

  const handleSubmit = () => {
    // dispatch(addFriend(name, date));
  }

  // COMBINE NAME/DATE TO PASS AS ONE PARAM

  return (
    <>
      {showModal ? (
        <section className='form-background'>
          <section showModal={showModal} className='form-wrapper'>
            <img src={otters} alt='otters' className='form-img'></img>
            <div className='form-content'>
              <h1>New Friend Form</h1>
              <label className='form-label'>Name:</label>
              <input type='text' className='form-name' placeholder='Full Name' onChange={handleChange} name='name'></input>
              <label className='form-label'>Birthday:</label>
              <input type='date' className='form-date' onChange={handleChange} name='date'></input>
              <label className='form-label'>Notes:</label>
              <input type='memo' className='form-memo' placeholder='Add notes here' name='memo'></input>
              <button className='form-button' onClick={handleSubmit}>Submit</button>
            </div>
            <MdClose aria-label='Close modal' className='close-form' onClick={() => setShowModal(prev => !prev)}/>
          </section>
        </section> 
      ) : null}
    </>
  )
}

// add prop type checking 

export default Form;