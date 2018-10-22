import React, {Component} from 'react';

class ArticleFormContainer extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event)  {

    event.preventDefault();
      fetch("/articles", {
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
        window.location = "/articles";
      })
  }

  render() {
      return (
        <div>
          <h1 className="grid-item-heading">Add a new article</h1>
            <div className="form">
              <div className="slimform">
                <div className="box">
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-30">
                        <label for="date">Date: </label>
                      </div>
                      <div className="col-70">
                        <input type="date" name="date" required/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-30">
                        <label for="title">Title: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="title" required/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label for="text">Article: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="text" required/>
                        {/* <textarea id="text" name="text" style="height:200px"/> */}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label for="image">Image URL: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="image" required/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label for="categories">Category: </label>
                      </div>
                    <div className="col-70">
                    <select id="categories" name="categories" required>
                        <option value="">Select a category</option>
                        <option value=""></option>
                    </select></div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label for="region">Region: </label>
                      </div>
                    <div className="col-70">
                    <select id="region" name="region" required>
                        <option value="">Select A Region</option>
                        <option value=""></option>
                    </select></div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label for="journalist">Journalist: </label>
                      </div>
                    <div className="col-70">
                    <select id="journalist" name="journalist" required>
                        <option value="">Select a journalist</option>
                        <option value=""></option>
                    </select></div>
                    </div>

                    <div className="row">
                      <input type="submit" value="Submit"/>
                    </div>

                </form>
              </div>
            </div>
          </div>
        </div>

      )
  }
}

export default ArticleFormContainer;
