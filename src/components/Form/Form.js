import './Form.css'

const Form = ({ showModal, setShowModal }) => {
  return (
    <section className='form'>
      {showModal ? 
        <section className='form-container'>
          <h1>Add New Friend</h1>
          <input type='text' className='name' placeholder='Full Name'></input>
          <input type='date' className='form-date'></input>
          <button className='form-button'>Submit</button>
        </section> 
        : null}
    </section>
  )
}

export default Form;