import React from 'react';
import Image from './Image';
import None from './None';
import Loading from './Loading';


const ImageList = props => {
  let images = <Loading />
  const results = props.data;
  images = results.map(image =>
    <Image url={"https:farm"+image.farm+".staticflickr.com/"+image.server+"/"+image.id+"_"+image.secret+"_q.jpg"} key={image.id} title={image.title}/>
  );
  if(props.results===0){
    images = <None />
  }

  return(
    <div>
    <h1 className="search-title">{props.value}</h1>
    <ul className="image-list">
      {images}
    </ul>
    </div>
    );
}

export default ImageList;
