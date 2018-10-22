import React, {Component} from 'react';

class JournalistFormContainer extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event)  {

    event.preventDefault();
    fetch("/journalists", {
      method: 'POST',
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
  render() {
    return (
      <div>
        <h1 className="grid-item-heading">Add a new journalist</h1>
        <div className="form">
          <div className="slimform">
            <div className="box">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-30">
                    <label for="name">Name: </label>
                  </div>
                  <div className="col-70">
                    <input type="text" name="name" required/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-30">
                    <label for="job-title">Job Title: </label>
                  </div>
                  <div className="col-70">
                    <input type="text" name="jobTitle" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-30">
                    <label for="phone-number">Phone Number: </label>
                  </div>
                  <div className="col-70">
                    <input type="text" name="phoneNumber" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-30">
                    <label for="email">Email Address: </label>
                  </div>
                  <div className="col-70">
                    <input type="text" name="email" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-30">
                    <label for="image">Image URL: </label>
                  </div>
                  <div className="col-70">
                    <input type="text" name="image" required/>
                    {/* <input id ="image" type="file" name="image" accept="image/*" required/> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-30">
                    <label for="location">Location: </label>
                  </div>
                  <div className="col-70">
                    <input type="text" name="location" required/>
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
}

export default JournalistFormContainer;
