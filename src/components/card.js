import React from "react";
import './card.css';
import { render } from "@testing-library/react";

class Card extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      name: 'xxxxx xxx',
      number: '0000000000000000',
      thru: 'MMYY',
    }
  }
   
  
  nameChange(n) {
    this.setState({
      name: n.target.value
    });
  }
  
  numberChange(c) { 
    this.setState({
      number: (typeof c.target.value === 'number')?c.target.value:c.target.value.replace(/[A-Za-z]| /g, '')
    });
    } 
 
  thruChange(m) {
    this.setState({
     thru: (typeof m.target.value === 'number' )?m.target.value:m.target.value.replace(/[A-Za-z]| /g, '')
    });
  }
 
  
  
  
  render() {
    return (
        <div className="main">
    <div className="card-main" >
        
         <div className='company-Name'>Company Name</div>
         
         <img className="puce-logo" src="https://img.icons8.com/officel/2x/sim-card-chip.png"></img>
         <div className='card-number'>{this.state.number.slice(0,4)+' '+this.state.number.slice(4,8)+' '+this.state.number.slice(8,12)+' '+this.state.number.slice(12,16)}</div>
         
         <div className='card-Validthru'>{this.state.thru.slice(0,2)+'/'+this.state.thru.slice(2,4)}</div>
         
          
          <img className="master-logo" src="https://www.mastercard.fr/content/dam/mccom/global/logos/logo-mastercard-mobile.svg"></img>
          
         
          
          <div className='card-Name'>{this.state.name.toUpperCase()}</div>
          
    </div>
    <div className="form-main" >
    <input className="fname"  placeholder=" Card number..." minlength="16" maxlength="16" onChange={this.numberChange.bind(this)}></input>
    <input type="text" className="fname"  placeholder=" Card name..."maxlength="20" onChange={this.nameChange.bind(this)}></input>
    <input type="text"   className="fname"  placeholder=" Card thru..." maxlength="4" onChange={this.thruChange.bind(this)}></input>
    </div>
    </div>
      );
}
}
export default Card;
