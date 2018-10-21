import React, {Component} from 'react';
import Journalist from '../../components/Journalist';

class JournalistList extends Component {
  constructor(props){
    super(props)
    this.state = {
      journalists: []
    }
  }

  componentDidMount(){
    fetch('/journalists')
    .then((res) => res.json())
    .then((data) => {
      this.setState({journalists: data._embedded.journalists})
    })
  }

  displayJournalists(){
    return (
      this.state.journalists.map((journalist, index) => {
        return <Journalist key={index} data={journalist} index={index}/>
      })
    )
  }

  render(){
    console.log(this.state.journalists);
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
