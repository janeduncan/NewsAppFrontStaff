import React from 'react';

const Journalist = (props) => {

  const url = '/staff/journalists/' + (props.index + 1);

  return (
    <div className="journalist-item">
      <img src={props.data.image} width='200' alt="merlin"/>
      <p>{props.data.firstName} {props.data.lastName}</p>
      <p>{props.data.type}</p>
      <a href={url}>view details</a>
    </div>
  )
}

export default Journalist;
