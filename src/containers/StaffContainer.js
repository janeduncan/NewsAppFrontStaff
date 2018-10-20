import React, {Component} from 'react';
import StaffContainerItem from './StaffContainerItem';
import JournalistListContainer from './journalists/JournalistListContainer';
import ArticleListContainer from './articles/ArticleListContainer';
import JournalistContainer from './journalists/JournalistContainer';
import ArticleContainer from './articles/ArticleContainer';


class StaffContainer extends Component {
  constructor(props){
    super(props)
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
