import React, {Component} from 'react';

class JournalistEditContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      journalist: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    fetch(this.props.url)
    .then((res) => res.json())
    .then((data) => {
      this.setState({journalist: data})
    })
  }

  handleSubmit(event)  {
    event.preventDefault();

    fetch(this.props.url, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "name": event.target.name.value,
        "jobTitle": event.target.jobTitle.value,
        "phoneNumber": event.target.phoneNumber.value,
        "email": event.target.email.value,
        "location": event.target.location.value,
        "image": event.target.image.value
      })
    }).then(() => {
      window.location = "/staff/journalists";
    })
  }


  render(){


    if (this.state.journalist){

      return (
        <div>
          <h1 className="grid-item-heading">Edit journalist</h1>
          <div className="form">
            <div className="slimform">
              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-30">
                      <label htmlFor="name">Name: </label>
                    </div>
                    <div className="col-70">
                      <input type="text" name="name" defaultValue={this.state.journalist.name} required/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-30">
                      <label htmlFor="job-title">Job Title: </label>
                    </div>
                    <div className="col-70">
                      <input type="text" name="jobTitle" defaultValue={this.state.journalist.jobTitle} required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-30">
                      <label htmlFor="phone-number">Phone Number: </label>
                    </div>
                    <div className="col-70">
                      <input type="text" name="phoneNumber" defaultValue={this.state.journalist.phoneNumber} required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-30">
                      <label htmlFor="email">Email Address: </label>
                    </div>
                    <div className="col-70">
                      <input type="text" name="email" defaultValue={this.state.journalist.email} required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-30">
                      <label htmlFor="image">Image URL: </label>
                    </div>
                    <div className="col-70">
                      <input type="text" name="image" defaultValue={this.state.journalist.image} required/>
                      {/* <input id ="image" type="file" name="image" accept="image/*" required/> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-30">
                      <label htmlFor="location">Location: </label>
                    </div>
                    <div className="col-70">
                      <input type="text" name="location" defaultValue={this.state.journalist.location} required/>
                    </div>
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

export default JournalistEditContainer;
