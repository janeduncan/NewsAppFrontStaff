import React from 'react';

const Journalist = (props) => {

  const url = '/staff/journalists/' + (props.index + 1);

  return (
    <div className="journalist-item">
      <div className="grid">
        <div className="grid-row">
          <div className="cell">
            <div className="card">
              <img src={props.data.image} alt={props.data.name} width="200px"></img>
              <div className="container">
                <h3><p>{props.data.name}</p></h3>
                <p>{props.data.jobTitle}</p>
                 <p>{props.data.location}</p>
                <a href={url}>View details</a>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journalist;
