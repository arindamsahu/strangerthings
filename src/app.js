import React, { Component}  from 'react';
import { Row, Col } from 'react-bootstrap';
import './app.css'; 
import axios from 'axios';
import HeroVideo from './hero_video';
import HeroList from './hero_list';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: false
    }
  }
  callbackFunction = (childData) => {
    this.setState({data: childData.data, error: childData.error});
  }

  async componentDidMount() {
    try {
      const response = await axios.get('en_US.json');
      this.setState(state => ({data: response.data, error: false}));
    } catch (error) {
      this.setState(state => ({data: {}, error: true}));
    }

  }

  render() {

    return ( 
      <div className="app">
        <Row >
          <Col xs={12} sm={12} md={8}> <HeroVideo dataFromParent = {this.state.data} parentCallback = {this.callbackFunction}/> </Col> 
          <Col xs={12} sm={12} md={4}> <HeroList dataFromParent = {this.state.data}/> </Col> 
      </Row>
      </div>
    );
  }
}

export default App;