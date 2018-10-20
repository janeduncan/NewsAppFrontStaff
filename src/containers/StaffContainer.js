import React, {Component} from 'react';
import JournalistContainer from './journalists/JournalistContainer';
import ArticleContainer from './articles/ArticleContainer';


class StaffContainer extends Component {

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
