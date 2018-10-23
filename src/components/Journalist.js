import React, {Component} from 'react';

class Journalist extends Component {

  constructor(props){
    super(props)
    this.state = {
      editLink: '/staff/journalists/' + (this.props.data.id) + '/edit'
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(){
    window.location = this.state.editLink;
  }

  render(){

    return (
      <div className="journalist-item">
        <div className="grid">
          <div className="grid-row">
            <div className="cell">
              <div className="card">
                <img src={this.props.data.image} alt={this.props.data.name} width="210px"></img>
                <div className="container">
                  <h3><p>{this.props.data.name}</p></h3>
                  <p>{this.props.data.jobTitle}</p>
                  <p>{this.props.data.location}</p>
                  <p>{this.props.data.phoneNumber}</p>
                  <p>{this.props.data.email}</p>
                  {/* <p><div className="delete"><a href={url}>Edit</a></div></p> */}
                  <button className="buttonz" onClick={this.handleEdit}>Edit</button>
                  {/* <button class="buttonz">Delete</button> */}
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }

}

export default Journalist;
