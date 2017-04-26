import React, { Component } from 'react';
import cx from 'classnames';

class Battery extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      wink: false
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({wink: true});
    }, 1200);
    
    setTimeout(() => {
      this.setState({wink: false});
    }, 1600);
  }

  render() {

    const level = parseInt(this.props.level * 100);

    const classes = cx({
      'Battery': true,
      'Battery--green': level >= 70,
      'Battery--turquoise': level < 70 && level >= 50,
      'Battery--yellow': level < 50 && level >=30,
      'Battery--orange': level < 30 && level >= 20,
      'Battery--red': level < 20
    });
    
    const leftEyeClasses = cx({
      'Battery_face-left-eye': true,
      'Battery_face-left-eye--wink': this.state.wink
    });

    return (
      <div className={classes}>
        <div className="Battery_contents" style={{width: `${level}%`}}></div>
        <div className="Battery_face">
          <div className={leftEyeClasses}></div>
          <div className="Battery_face-right-eye"></div>
          <div className="Battery_face-mouth"></div>
        </div>
      </div>
    );
  }
};

export default Battery;