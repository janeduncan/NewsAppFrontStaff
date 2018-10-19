import React from 'react';
import { Redirect } from 'react-router-dom';

const StaffContainerItem = (props) => {

  const handleViewAllClick = () => {
   console.log("view all clicked!");
  }

  const handleAddNewClick = () => {
    console.log("button clicked");
  }

  return (
    <div className="staff-container-item">
      <h1 className="grid-item-heading">Articles</h1>
      <div className="buttons-container">
        <button className="view-all-button" onClick={handleViewAllClick}>View all</button>
        <button className="add-new-button" onClick={handleAddNewClick}>Add new article</button>
      </div>
    </div>
  )
}

export default StaffContainerItem;
