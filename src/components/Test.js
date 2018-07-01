import React from 'react';
import Image from './Image';

const Test = ({match}) => {
  console.log(`${match.url}`)

  return(
    <ul className="image-list">
    </ul>
    );
}

export default Test;
