import './Form.css';
import { useRef } from 'react';
import otters from '../../assets/otters.png';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFriend } from '../../actions';
import { postFriend } from '../../utilities/apiCalls';

const Form = ({ userId, showmodal, setShowModal }) => {
  const dispatch = useDispatch();
  const [friend, setFriend] = useState({});
  const [error, setError] = useState(false);

  const inputName = useRef();
  const inputDate = useRef();
  const inputMemo = useRef();

  const handleChange = () => {
    setFriend([{
      name: inputName.current.value,
      birthday: inputDate.current.value,
      memo: inputMemo.current.value,
      need_gift: true
    }])
  };

  const clearForm = () => {
    Array.from(document.querySelectorAll('input')).forEach(input => (input.value=''));
  };

  const createNewFriend = () => {
    postFriend(userId, friend[0])
      .then(data => {
        dispatch(addFriend([data.data.attributes]))
        clearForm();
      })
      .catch(error => setError(true))
  };


  const handleSubmit = () => {
    createNewFriend();
  };

  return (
    <>
      {showmodal ? (
        <section className='form-background'>
          <section
          // showmodal={showmodal}
          className='form-wrapper'>
            <img src={otters} alt='otters' className='form-img'></img>
            <div className='form-content'>
              <h1>New Friend Form</h1>
              <label className='form-label'>Name:</label>
              <input type='text' className='form-name' placeholder='Full Name' onChange={handleChange} ref={inputName}></input>
              <label className='form-label'>Birthday: (don't worry if you don't know the year, just pick the month and day)</label>
              <input type='date' className='form-date' onChange={handleChange} ref={inputDate}></input>
              <label className='form-label'>Notes:</label>
              <input type='text' className='form-memo' onChange={handleChange} ref={inputMemo}></input>
              {error &&
              <p>Something went wrong, please try again.</p>}
              <button className='form-button' onClick={handleSubmit}>Submit</button>
            </div>
            <MdClose aria-label='Close modal' className='close-form'
            onClick={() => setShowModal(prev => !prev)
            }/>
          </section>
        </section>
      ) : null}
    </>
  )
}

export default Form;
