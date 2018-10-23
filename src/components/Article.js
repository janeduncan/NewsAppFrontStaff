import React, {Component} from 'react';
import moment from 'moment';

class Article extends Component {

    constructor(props){
      super(props)
      this.state = {
        url: '/articles/' + (this.props.data.id)
      }

      this.handleArticleDelete = this.handleArticleDelete.bind(this);
    }

  handleArticleDelete(){
    fetch(this.state.url, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }).then(() => {
      window.location = "/staff/articles";
    })
  }

  render(){

    let date = new Date(this.props.data.date);
    let formattedDate = moment(date).format("DD/MM/YYYY HH:mm");



    const categoryNames = this.props.data.categories.map((category, index) => {
      return <div key={index}>{category.name} </div>
    })

    return (
      <tr>
        <td>{formattedDate}</td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.journalist.name}</td>
        <td>{this.props.data.region.name}</td>
        <td>{categoryNames}</td>
        <td><button>Edit</button></td>
        <td><button onClick={this.handleArticleDelete}>Delete</button></td>
      </tr>
    )
  }

}

export default Article;
