// import React, { Component } from 'react'

// export default class ToggleOnOff extends Component {
//    constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     );
//   }
// }
import React, { useState } from 'react';

const ToggleOnOff = () => {
    const [isToggleOn, setIsToggleOn] = useState(false);
    return (
        <div>
            <h1> Toggle On Off</h1>
        <button onClick={() => setIsToggleOn (!isToggleOn)}> 
            {isToggleOn ? "on" : "off"}
        </button>
        </div>
    );
};

export default ToggleOnOff;





