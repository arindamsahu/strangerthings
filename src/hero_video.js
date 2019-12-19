import React, { Component}  from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import './app.css'; 
import axios from 'axios';

class HeroVideo extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let URI = 'en_US.json';
    if(event.currentTarget.checked){
      URI = 'la_PG.json'
    }
    try {
      const promise = axios.get(URI);
      promise.then(response => {
        this.props.parentCallback({data: response.data, error: false});
      });
    } catch (error) {
      this.props.parentCallback({data: {}, error: true});
    }
  }

  render() {
    if(!this.props.dataFromParent['video-embed']) {
      return (
      <div>No data returned</div>
    );
    }
    return ( 
      <div className="video">
        <Row >
          <Col xs={12} sm={12} md={12}>
            <header className="video__header">{this.props.dataFromParent.heading}</header>
          </Col> 
      </Row>
      <div className="player">
        <iframe title="player_title" className="player_iframe" src= {this.props.dataFromParent['video-embed']} width="100%" ></iframe>
      </div>
      <Row className="lang"><Col><span>EN</span>
      <div className="switch-wrapper">
      <Form>
        <Form.Check type="switch" id="custom-switch" label="" onChange={this.handleChange}/></Form> 
       </div>
       <span>PG</span>
       </Col>
      </Row>
      <Row className="description">
        {this.props.dataFromParent.description}
      </Row>
      <Row className="locations">
        {this.props.dataFromParent.locations}
      </Row>
      </div>
    );
  }
}

export default HeroVideo;