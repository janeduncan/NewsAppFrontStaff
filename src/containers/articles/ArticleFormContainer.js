import React, {Component} from 'react';

class ArticleFormContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      journalists: [],
      categories: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.displayRegions = this.displayRegions.bind(this);
    this.displayJournalists = this.displayJournalists.bind(this);
    this.displayCategories = this.displayCategories.bind(this);
  }

  handleSubmit(event)  {

    event.preventDefault();

    const options = event.target.categories.options
    const selectedCategories = []
    for (var index = 0; index < options.length; index++) {
      if (options[index].selected){
        selectedCategories.push(this.state.categories[index])
      }
    }


    console.log(selectedCategories);
      fetch("/articles", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "date": event.target.date.value,
          "title": event.target.title.value,
          "text": event.target.text.value,
          "summary": event.target.summary.value,
          "image": event.target.image.value,
          "categories": {
            "id": 1,
            "category": 0
          },
          "region": event.target.region.value,
          "journalist": event.target.journalist.value
        })
      }).then(() => {
        console.log("hi");
        // window.location = "/staff/articles";
      })
  }

  componentDidMount(){
    fetch('/journalists')
    .then((res) => res.json())
    .then((data) => {
      this.setState({journalists: data._embedded.journalists})
    })

    fetch('/categories')
    .then((res) => res.json())
    .then((data) => {
      this.setState({categories: data._embedded.categories})
    })
  }

  // displayRegions(){
  //   return null;
  // }
  //
  displayJournalists(){
    return this.state.journalists.map((journalist, index) => {
      return <option key={index}>{journalist.name}</option>
    })
  }

  displayCategories(){
    return this.state.categories.map((category, index) => {
      return <option key={index} value={index}>{category.category}</option>
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
                        <label htmlFor="date">Date: </label>
                      </div>
                      <div className="col-70">
                        <input type="date" name="date" required/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="title">Title: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="title" required/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="text">Article: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="text" required/>
                        {/* <textarea id="text" name="text" style="height:200px"/> */}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="summary">Summary: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="summary" required/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="image">Image URL: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="image" required/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="categories">Categories: </label>
                      </div>
                    <div className="col-70">
                      <select multiple="multiple" id="categories" name="categories" required>
                        {this.displayCategories()}
                      </select>
                  </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="region">Region: </label>
                      </div>
                    <div className="col-70">
                    <select id="region" name="region" required>
                        <option value="">Select A Region</option>
                        <option value="Scotland">Scotland</option>
                        {/* {this.displayRegions()} */}
                    </select></div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="journalist">Journalist: </label>
                      </div>
                    <div className="col-70">
                    <select id="journalist" name="journalist" required>
                        <option value="">Select a journalist</option>
                        {this.displayJournalists()}
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
