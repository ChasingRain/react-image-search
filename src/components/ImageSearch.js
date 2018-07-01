import React from 'react';
import Image from './Image';

const ImageSearch = props => {

  const results = props.data;
  let images = results.map(image =>
    <Image url={"https:farm"+image.farm+".staticflickr.com/"+image.server+"/"+image.id+"_"+image.secret+"_q.jpg"} key={image.id} title={image.title}/>
  );
  return(
    <ul className="image-list">
      {images}
    </ul>
    );
}

export default ImageSearch;
