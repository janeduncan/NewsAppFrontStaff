import React, {Component} from 'react';
import StaffContainerItem from './StaffContainerItem';
import JournalistListContainer from './journalists/JournalistListContainer';
import ArticleListContainer from './articles/ArticleListContainer';
import JournalistContainer from './journalists/JournalistContainer';
import ArticleContainer from './articles/ArticleContainer';


class StaffContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: [
        {
        category: "sports",
        title: "football news",
        body: "some new about football"
      },
      {
      category: "music",
      title: "music news",
      body: "some new about music"
    }
    ],
      journalists: [
        {
          type: "sports reporter",
          firstName: "Bart",
          lastName: "Simpson",
          articles: ["an article", "another article"]
        },
        {
          type: "music reporter",
          firstName: "Pac",
          lastName: "Man",
          articles: ["an article", "another article"]
        }
      ]
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
