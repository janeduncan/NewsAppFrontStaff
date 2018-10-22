import React from 'react';

const JournalistIndividual = (props) => {

  return (
    <div className="journalist-individual">
      <img src={props.data.image} alt={props.data.name} width="200px"></img>
      <p>{props.data.name}</p>
      <p>{props.data.jobTitle}</p>
      <p>{props.data.location}</p>
      <p>{props.data.phoneNumber}</p>
      <p>{props.data.email}</p>
    </div>
  )
}

export default JournalistIndividual;
