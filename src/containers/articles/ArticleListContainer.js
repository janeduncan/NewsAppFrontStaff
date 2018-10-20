import React, {Component} from 'react';
import Article from '../../components/Article';

class ArticleListContainer extends Component {
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

  displayArticles(){
    return (
      this.state.articles.map((article) => {
        return <Article/>
      })
    )
  }


  render(){
    return (
      <div className="article-list-container">
        {this.displayArticles()}
      </div>
  )
  }
}

export default ArticleListContainer;
