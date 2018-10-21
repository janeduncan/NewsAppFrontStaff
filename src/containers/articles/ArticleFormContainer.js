import React from 'react';

const handleSubmit = (event) => {

  event.preventDefault();
  fetch("/staff/articles", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "date": event.target.date.value,
        "region": event.target.region.value,
        "image": event.target.image.value,
        "title": event.target.title.value,
        "text": event.target.text.value,
        "journalist": event.target.journalist.value,
        "categories": event.target.categories.value
      })
  }).then(() => {
    window.location = "/staff/articles";
  })
}

const ArticleFormContainer = (props) => {

    return (
      <div>
        <h1>Add a new article</h1>
        <form onSubmit={handleSubmit}>
          <input type="date" name="date" required/>
          <input type="text" placeholder="Title" name="title" required/>
          <input type="text" placeholder="text" name="text" required/>
          <input type="text" placeholder="Image URL" name="imageUrl" required/>
          {/*  Maybe need to use checkboxes for category?  */}
          <select name="category">
            <option>Select a category</option>
          </select>
          <select name="region">
            <option>Select a region</option>
          </select>
          <select name="journalist">
            <option>Select a journalist</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    )

}

export default ArticleFormContainer;
