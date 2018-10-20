import React from 'react';

const handleSubmit = (event) => {
  event.preventDefault();
  fetch("/staff/journalists", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "name": event.target.name.value,
        "jobTitle": event.target.jobTitle.value,
        "phoneNumber": event.target.phoneNumber.value,
        "email": event.target.email.value
      })
  }).then(() => {
    window.location = "/staff/journalists";
  })
}


const JournalistFormContainer = (props) => {
  return (
    <div>
      <h1>Add a new journalist</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" required/>
        <input type="text" placeholder="Job title" name="jobTitle" required/>
        <input type="text" placeholder="Phone number" name="phoneNumber" required/>
        <input type="text" placeholder="Email" name="email" required/>
        <select name="location">
          <option>Select a location</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

// this.name = name;
//         this.jobTitle = jobTitle;
//         this.location = location;
//         this.phoneNumber = phoneNumber;
//         this.email = email;

export default JournalistFormContainer;
