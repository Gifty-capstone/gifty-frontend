import './Form.css'
import { MdClose } from 'react-icons/md';

const Form = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <section className='form-background'>
          <section showModal={showModal} className='form-wrapper'>
            <img src={require('../../assets/otters.jpeg')} alt='otters' className='form-img'></img>
            <div className='form-content'>
              <h1>Add New Friend</h1>
              <input type='text' className='name' placeholder='Full Name'></input>
              <input type='date' className='form-date'></input>
              <button className='form-button'>Submit</button>
            </div>
            <MdClose aria-label='Close modal' className='close-form' onClick={() => setShowModal(prev => !prev)}/>
          </section>
        </section> 
      ) : null}
    </>
  )
}

export default Form;