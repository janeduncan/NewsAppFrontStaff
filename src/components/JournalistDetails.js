import React, {Component} from 'react';
import JournalistIndividual from './JournalistIndividual';

class JournalistDetails extends Component {

  constructor(props){
    super(props)
    this.url = props.url;
    this.state = {
      journalists: []
    }
  }

  componentDidMount(){
    fetch(this.url)
    .then((res) => res.json())
    .then((data) => {
      this.setState({journalists: data})
    })
  }

  render() {
    return (
      <JournalistIndividual data={this.state.journalists}/>
    )
  }
}

export default JournalistDetails;
