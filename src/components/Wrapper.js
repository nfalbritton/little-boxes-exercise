import React from 'react';
import Numbers from './Numbers';
import Picture from './Picture';


const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
      <Numbers />
      <Picture />
    </div>
  )
}

export default Wrapper;
