import React from 'react';

const JournalistContainer = (props) => {

  const handleViewAllClick = () => {
    window.location = "/staff/journalists"
  }

  const handleAddNewClick = () => {
    window.location = "/staff/journalists/new"
  }

  return (
    <div className="staff-container-item">
      <h1 className="grid-item-heading">Journalists</h1>
      <div className="buttons-container"><center>
        <button className="view-all-button view-all-button-hover" onClick={handleViewAllClick}>View all</button>
        <button className="view-all-button view-all-button-hover" onClick={handleAddNewClick}>Add new journalist</button>
      </center></div>
    </div>
  )
}

export default JournalistContainer;
