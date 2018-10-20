import React from 'react';

const handleSubmit = (event) => {
  console.log(event.target.value);
}

const JournalistFormContainer = (props) => {
  return (
    <div>
      <h1>Add a new journalist</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="firstName" required/>
        <input type="text" placeholder="Last Name" name="lastName" required/>
        <select name="type">
          <option>Select a type</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}


export default JournalistFormContainer;
