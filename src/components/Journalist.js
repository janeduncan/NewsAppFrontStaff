import React from 'react';

const Journalist = (props) => {

  const url = '/staff/journalists/' + (props.index + 1);

  return (
    <div className="journalist-item">
      <img src={props.data.image} width='200' alt={props.data.name}/>
      <p>{props.data.name}</p>
      <p>{props.data.jobTitle}</p>
      <p>{props.data.region}</p>
      <a href={url}>view details</a>
    </div>
  )
}

export default Journalist;
