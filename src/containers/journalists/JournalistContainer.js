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
      <div className="buttons-container">
        <button className="view-all-button" onClick={handleViewAllClick}>View all</button>
        <button className="add-new-button" onClick={handleAddNewClick}>Add new journalist</button>
      </div>
    </div>
  )
}

export default JournalistContainer;
