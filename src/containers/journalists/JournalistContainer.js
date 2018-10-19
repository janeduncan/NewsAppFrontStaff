import React from 'react';

const JournalistContainer = (props) => {
  return (
    <div className="grid-item">
      <h1 className="grid-item-heading">Journalists</h1>
      <div className="buttons-container">
        <button className="view-all-button">View all</button>
        <button className="add-new-button">Add new journalist</button>
      </div>
    </div>
  )
}

export default JournalistContainer;
