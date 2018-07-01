import React from 'react';

const Image = props => (
  <li className="image">
    <div className="image-box">
      <img src={props.url} alt={props.title}/>
      <div className='textblock'>
        <p className="image-text">{props.title}</p>
      </div>
    </div>
  </li>
);

export default Image;
