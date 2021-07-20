import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = ({ error }) => {
  return (
    <div className='error-area'>
      <h1>{error}</h1>
      <Link to={'/'}><button className='home'>Back to main</button></Link>
    </div>
  )
}

export default Error;
