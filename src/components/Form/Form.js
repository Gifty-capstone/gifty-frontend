import './Form.css';
import { useRef } from 'react';
import otters from '../../assets/otters.png';
import { MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFriend } from '../../actions';

const Form = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const [friend, setFriend] = useState({});
  //ref is very similar to state, persists between renders of the component, but does not cause the component to reupdate when it gets changed
  //refs returns an object {current: ''} or whatever you pass as a param
  const inputName = useRef();
  const inputDate = useRef();
  const inputMemo = useRef();

  const handleChange = (event) => {
    setFriend({
      birthday: inputDate.current.value,
      name: inputName.current.value,
      memo: inputMemo.current.value
    })
  };

  const handleSubmit = () => {
    dispatch(addFriend(friend));
    console.log(friend)
  }

  return (
    <>
      {showModal ? (
        <section className='form-background'>
          <section showModal={showModal} className='form-wrapper'>
            <img src={otters} alt='otters' className='form-img'></img>
            <div className='form-content'>
              <h1>New Friend Form</h1>
              <label className='form-label'>Name:</label>
              <input type='text' className='form-name' placeholder='Full Name' onChange={handleChange} ref={inputName}></input>
              <label className='form-label'>Birthday:</label>
              <input type='date' className='form-date' onChange={handleChange} ref={inputDate}></input>
              <label className='form-label'>Notes:</label>
              <input type='text' className='form-memo' onChange={handleChange} ref={inputMemo}></input>
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