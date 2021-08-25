import React, { Component } from 'react'

export default class OptionInput extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            value: ''
        }
           
    }
    handleChange =(e)=> {
        this.setState({value: e.target.value})
    }
    handleSubmit = e => {
        
        e.preventDefault(); 
       
    }
   
    render() {
       const { value} = this.state;
        console.log(value)
     
        return (

            <div>
                <form action="" onSubmit={this.handleSubmit}>                            
                   <select value={value} onChange={this.handleChange}>
                       <option value="apple">apple</option>
                       <option value="banana">Banana</option>
                       <option value="mongo">Mongo</option>
                       <option value="orange">Orange</option>
                       <option value="pineapple">Pineapple</option>
                   </select>
                   <input type="submit" />
                </form>
            </div>
        )
    }
}
