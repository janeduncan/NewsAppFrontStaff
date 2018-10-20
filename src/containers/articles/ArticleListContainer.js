import React, {Component} from 'react';
import Article from '../../components/Article';

class ArticleListContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    fetch('/articles')
    .then((res) => res.json())
    .then((data) => {
      this.setState({articles: data._embedded.articles})
    })
  }

  displayArticles(){
    return (
      this.state.articles.map((article, index) => {
        return <Article key={index} data={article} index={index}/>
      })
    )
  }

  render(){
    console.log(this.state.articles);
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
