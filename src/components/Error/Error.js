import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = ({ error }) => {
  return (
    <div className='error-area'>
      <h1>Error: {error}</h1>
      <Link to={'/'}><button>Go back to home page</button></Link>
    </div>
  )
}

export default Error;
