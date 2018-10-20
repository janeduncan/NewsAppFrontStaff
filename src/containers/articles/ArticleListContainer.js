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
          body: "some news about football",
          journalist: "Bart Simpson",
          date: "20/10/18"
        },
        {
          category: "music",
          title: "music news",
          body: "some news about music",
          journalist: "Pacman",
          date: "19/10/18"
        },
        {
          category: "animals",
          title: "news about hamsters",
          body: "some news about hamsters",
          journalist: "Merlin",
          date: "19/10/18"
        }

      ]
    }
  }

  // componentDidMount(){
  //   fetch('/articles')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     this.setState({articles: data})
  //   })
  // }

  displayArticles(){
    return (
      this.state.articles.map((article, index) => {
        return <Article key={index} data={article} index={index}/>
      })
    )
  }

  render(){
    return (
      <div className="article-list-container">
        <h1 className="list-heading">Articles</h1>
        <table id="articles-table">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Journalist</th>
              <th>Categories</th>
            </tr>
            {this.displayArticles()}
          </tbody>
        </table>
      </div>
  )
  }
}

export default ArticleListContainer;
