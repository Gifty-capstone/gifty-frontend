import './Form.css';
import otters from '../../assets/otters.png';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFriend } from '../../actions';
import { postFriend } from '../../utilities/apiCalls';
import Confetti from 'react-confetti';
const initialState = {
  name: '',
  birthday: '',
  memo: ''
}
const Form = ({ userId, showmodal, setShowModal }) => {
  const dispatch = useDispatch();
  const [friend, setFriend] = useState(initialState);
  const [error, setError] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const handleChange = ({ target: {name, value} }) => {
    setFriend({
      ...friend,
      [name]:value
    })
    setConfetti(false);
  }
  const clearForm = () => {
    Array.from(document.querySelectorAll('input')).forEach(input => (input.value=''));
  };
  const createNewFriend = () => {
    postFriend(userId, friend)
      .then(data => {
        dispatch(addFriend(data.data.attributes));
        clearForm();
        setConfetti(true);
      })
      .catch(error => setError(true))
  };
  const handleSubmit = () => {
    createNewFriend();
    setError(false);
  };
  return (
    <>
      {showmodal ? (
        <section className='form-background'>
          <section
          // showmodal={showmodal}
          className='form-wrapper'>
            {confetti &&
              <Confetti
                width={560}
                height={450}
              />
            }
            <img src={otters} alt='otters' className='form-img'></img>
            <div className='form-content'>
              <h1 className='form-title'>New Friend Form</h1>
              <label className='form-label'>Name:</label>
              <input type='text' className='form-name' placeholder='Full Name' onChange={handleChange} ref={inputName}></input>
              <label className='birthday-label'>Birthday: (don't worry if you don't know the year, just pick the month and day)</label>
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
