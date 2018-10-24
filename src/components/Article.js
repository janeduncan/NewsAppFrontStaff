import React, {Component} from 'react';
import moment from 'moment';

class Article extends Component {

    constructor(props){
      super(props)
      this.state = {
        url: '/articles/' + (this.props.data.id),
        editLink: '/staff/articles/' + (this.props.data.id) + '/edit'
      }
      this.handleEdit = this.handleEdit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.formatDate = this.formatDate.bind(this);
      this.categoryNames = this.categoryNames.bind(this);
    }

  handleDelete(){
    fetch(this.state.url, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }).then(() => {
      window.location = "/staff/articles";
    })
  }

  handleEdit(){
    window.location = this.state.editLink;
  }

  categoryNames(){
    return this.props.data.categories.map((category, index) => {
      return <div key={index}>{category.name} </div>
    })
  }

  formatDate(){
    let date = new Date(this.props.data.date);
    let formattedDate = moment(date).format("DD/MM/YYYY HH:mm");
    return formattedDate;
  }

  render(){

    console.log(this.props.data.region)

    return (
      <tr>
        <td>{this.formatDate()}</td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.journalist.name}</td>
        <td>{this.props.data.region.name}</td>
        <td>{this.categoryNames()}</td>
        <td><button onClick={this.handleEdit}>Edit</button></td>
        <td><button onClick={this.handleDelete}>Delete</button></td>
      </tr>
    )
  }

}

export default Article;
