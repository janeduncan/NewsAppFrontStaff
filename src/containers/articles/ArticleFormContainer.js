import React, {Component} from 'react';

class ArticleFormContainer extends Component {
  constructor(props){
    super(props);
  }

  handleSubmit(event){
    console.log(event.target.value);
  }

  render(){
    return (
      <div>
        <h1>Add a new article</h1>
        <form onSubmit={this.handleSubmit}>
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
}

export default ArticleFormContainer;
