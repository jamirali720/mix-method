import React, { Component } from 'react'

export default class Temperature extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             temperature: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        this.setState({temperature: e.target.value})
    }
    
    render() {
        const temperature = this.state.temperature;
        return (
            <div>              
                    <fieldset>
                        <legend> write your temperature here</legend>
                            <input type="text"  value={temperature}
                                onChange={this.handleChange}
                            />
                        <BoilingVerdict celsius={parseFloat(temperature)}/>
                    </fieldset>                
            </div>
        )
    }
}

const BoilingVerdict = ( props ) => {
  if (props.celsius >= 100) {
    return <p> the water would boil</p>;
  } else {
    return <p> the water would not boil</p>;
  }
};