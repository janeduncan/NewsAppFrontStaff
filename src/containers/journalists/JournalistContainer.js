import React from 'react';

const StaffContainerItem = (props) => {

  const handleViewAllClick = () => {
   console.log("view all clicked!");
  }

  const handleAddNewClick = () => {
    console.log("add new clicked!")
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

export default StaffContainerItem;
