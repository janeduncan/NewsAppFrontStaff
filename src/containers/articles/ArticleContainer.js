import React from 'react';

const ArticleContainer = (props) => {

  const handleViewAllClick = () => {
   window.location = "/staff/articles"
  }

  const handleAddNewClick = () => {
    window.location = "/staff/articles/new"
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

export default ArticleContainer;
