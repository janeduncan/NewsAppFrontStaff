import React, {Component} from 'react';
import moment from 'moment';

class ArticleEditContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      article: null,
      journalists: [],
      categories: [],
      regions: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayRegions = this.displayRegions.bind(this);
    this.displayJournalists = this.displayJournalists.bind(this);
    this.displayCategories = this.displayCategories.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(){
    let date = new Date(this.state.article.date);
    let formattedDate = moment(date).format("YYYY-MM-DD");
    return formattedDate;
  }

  componentDidMount(){
      fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({article: data})
        // console.log(this.state.article.date);
      })

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

      fetch('/regions')
      .then((res) => res.json())
      .then((data) => {
        this.setState({regions: data._embedded.regions})
      })
  }

  handleSubmit(event) {

    event.preventDefault();

    const options = [...event.target.categories.options]
    const selectedCategories = options.filter((option) => {
      return option.selected
    }).map((option) => {
      return option.value
    })

      fetch("/articles", {
        method: 'PA',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "date": event.target.date.value,
          "title": event.target.title.value,
          "text": event.target.text.value,
          "summary": event.target.summary.value,
          "image": event.target.image.value,
          "categories": selectedCategories,
          "region": event.target.region.value,
          "journalist": event.target.journalist.value
        })
      }).then(() => {
        window.location = "/staff/articles";
      })
  }

  displayRegions(){
    return this.state.regions.map((region, index) => {
      return <option key={index} value={region._links.self.href}>{region.name}</option>
    })
  }

  displayJournalists(){
    return this.state.journalists.map((journalist, index) => {
      return <option key={index} value={journalist._links.self.href}>{journalist.name}</option>
    })
  }

  displayCategories(){
    return this.state.categories.map((category, index) => {
      return <option key={index} value={category._links.self.href}>{category.name}</option>
    })
  }

render(){

    if (this.state.article){

      return (

        <div>
          <h1 className="grid-item-heading">Edit Article</h1>
            <div className="form">
              <div className="slimform">
                <div className="box">
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="date">Date: </label>
                      </div>
                      <div className="col-70">
                        <input type="date" name="date" defaultValue={this.formatDate()} required/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="title">Title: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="title" defaultValue={this.state.article.title} required/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="text">Article: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="text" defaultValue={this.state.article.text} required/>
                        {/* <textarea id="text" name="text" style="height:200px"/> */}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="summary">Summary: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="summary" defaultValue={this.state.article.summary} required/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="image">Image URL: </label>
                      </div>
                      <div className="col-70">
                        <input type="text" name="image" defaultValue={this.state.article.image} required/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="categories">Categories: </label>
                      </div>
                    <div className="col-70">
                      <select multiple id="categories" name="categories" required>
                        <option>Select at least one category</option>
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
                        {this.displayRegions()}
                    </select></div>
                    </div>

                    <div className="row">
                      <div className="col-30">
                        <label htmlFor="journalist">Journalist: </label>
                      </div>
                    <div className="col-70">
                    <select id="journalist" name="journalist" required>
                        {/* <option key={0} value={this.state.article._links.journalist.href}></option> */}
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

    return null;

}

}

export default ArticleEditContainer;
