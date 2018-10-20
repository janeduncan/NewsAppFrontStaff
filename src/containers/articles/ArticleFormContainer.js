import React from 'react';

const handleSubmit = (event) => {
  console.log(event.target.value);
}

const ArticleFormContainer = (props) => {

    return (
      <div>
        <h1>Add a new article</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" name="title" required/>
          <input type="text" placeholder="Image URL" name="imageUrl" required/>
          <input type="text" placeholder="text" name="text" required/>
          <select name="type">
            <option>Select a category</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    )

}




export default ArticleFormContainer;
