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
        "email": event.target.email.value,
        "location": event.target.location.value,
        "image": event.target.image.value
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
        <input type="text" placeholder="Image URL" name="image" required/>
        <input type="text" placeholder="Location" name="location" required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default JournalistFormContainer;
