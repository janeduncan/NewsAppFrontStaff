import React, {Component} from 'react';

class StaffContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: [],
      journalists: []
    }
  }

  render(){
    return <h1>staff container</h1>
  }
}

export default StaffContainer;
