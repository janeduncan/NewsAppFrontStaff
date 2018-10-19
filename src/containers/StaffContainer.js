import React, {Component} from 'react';
import JournalistContainer from './journalists/JournalistContainer.js';
import ArticleContainer from './articles/ArticleContainer';

class StaffContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: [],
      journalists: []
    }
  }

  render(){
    return (
      <div className="staff-container">
        <JournalistContainer/>
        <ArticleContainer/>
      </div>
    )
  }
}

export default StaffContainer;
