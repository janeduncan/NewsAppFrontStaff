import React from 'react';

const ArticleContainer = (props) => {
  return (
    <div className="grid-item">
      <h1 className="grid-item-heading">Articles</h1>
      <div className="buttons-container">
        <button className="view-all-button">View all</button>
        <button className="add-new-button">Add new article</button>
      </div>
    </div>
  )
}

export default ArticleContainer;
