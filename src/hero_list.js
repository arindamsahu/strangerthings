import React, { Component, Fragment}  from 'react';
import { Row, Col, Figure } from 'react-bootstrap';
import './app.css'; 
import Stars from './stars';

class HeroList extends Component {

  render() {
    if(!this.props.dataFromParent['episode-list']) {
      return (
      <div>No data returned</div>
    );
    }
    return ( 
      <div className="list">
        <Row >
          <Col xs={12} sm={12} md={12}>
            <header className="list__header">Episodes</header>
          </Col> 
        </Row>
        <Row className="episodes">
      {this.props.dataFromParent['episode-list'].map(item => (
        <Col sm={6} xs={6} key={item.name}>
        <Fragment>
        <Figure>
          <Figure.Image src="https://via.placeholder.com/200x175"/>
        <Figure.Caption>
          <div>
            <b>Season:{item.season}</b> {item.name}
          </div>
          <Stars dataFromHeroList = {item.rating}></Stars>
        </Figure.Caption>
        </Figure>
        </Fragment>
       </Col>
      ))}
      </Row>
      </div>
    );
  }
}

export default HeroList;