import React, { Component}  from 'react';
import './app.css'; 

class Stars extends Component {

    constructor(props){
        super(props);
        this.renderStars = this.renderStars.bind(this);
    }

 renderStars() {
    let rating = Math.round(this.props.dataFromHeroList / 2); //
    let output = [];

    for (let i = rating; i >= 1; i--) {
      output.push(<i className="fa fa-star" aria-hidden="true" style={{color: "gold"}} key={i}></i>);
    if (i === .5) {
      output.push(<i className="fa fa-star-half-o" aria-hidden="true" style={{color: "gold"}}></i>);
    }
  }
    for (let i = (5 - rating); i >= 1; i--) {
      output.push(<i className="fa fa-star-o" aria-hidden="true" style={{color: "gold"}} key={10*i}></i>);
    }
    return output;
 }
  render() {
    if(!this.props.dataFromHeroList) {
        return (
        <span>No data returned</span>
      );
    }

    return ( 
      <span>{this.renderStars()}</span>
    );
  }
}

export default Stars;