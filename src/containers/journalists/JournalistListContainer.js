import React, {Component} from 'react';
import Journalist from '../../components/Journalist';

class JournalistList extends Component {
  constructor(props){
    super(props)
    this.state = {
      journalists: [
        {
          type: "sports reporter",
          firstName: "Bart",
          lastName: "Simpson",
          articles: ["an article", "another article"],
          image: '/images/merlin.jpg'
        },
        {
          type: "music reporter",
          firstName: "Pac",
          lastName: "Man",
          articles: ["an article", "another article"],
          image: '/images/merlin.jpg'
        },
        {
          type: "wildlife reporter",
          firstName: "Merlin",
          lastName: "",
          articles: ["an article", "another article"],
          image: '/images/merlin.jpg'
        }
      ]
    }
  }

  displayJournalists(){
    return (
      this.state.journalists.map((journalist, index) => {
        return <Journalist key={index} data={journalist} index={index}/>
      })
    )
  }

  render(){
    return(
      <div className="journalist-list-container">
        <h1 className="list-heading">Journalists</h1>
        <div className="journalists-list">
          {this.displayJournalists()}
        </div>
      </div>
    )
  }

}

export default JournalistList;
