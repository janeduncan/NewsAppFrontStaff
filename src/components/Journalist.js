import React from 'react';

const Journalist = (props) => {

  const url = '/staff/journalists/' + (props.data.id);

  return (
    <div className="journalist-item">
      <div className="grid">
        <div className="grid-row">
          <div className="cell">
            <div className="card">
              <img src={props.data.image} alt={props.data.name} width="210px"></img>
              <div className="container">
                <h3><p>{props.data.name}</p></h3>
                <p>{props.data.jobTitle}</p>
                <p>{props.data.location}</p>
                <p>{props.data.phoneNumber}</p>
                <p>{props.data.email}</p>
                {/* <p><div className="delete"><a href={url}>Edit</a></div></p> */}
                <button class="buttonz">Edit</button>
                {/* <button class="buttonz">Delete</button> */}
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
