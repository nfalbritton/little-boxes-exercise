import React from 'react';

const List = props => {
  let list = ['Asteroids', 'Comets', 'Moon', 'Planets', 'Stars', 'Sun'];
  return (
    <div className='box list'>
      <h1>Here Is a List</h1>
      <ul>
        {list.map(function(item, index){
          return <li key={ index }>{item}</li>;
        })}
      </ul>
    </div>
  )
}

export default List;
