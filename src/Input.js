import React, { Component} from 'react';
import WordHandler from './WordHandler';

class Input extends Component{
    constructor(props){
        super(props)
        this.state = {text: "", value: "", lives: 5}; 
        this.wordHandler = new WordHandler("hello")
        this.setState({text: this.wordHandler.currentState})
    }

    reset(){
        this.setState({text: "", value: "", lives: 5})
        this.wordHandler = new WordHandler("hello world")
        this.setState({text: this.wordHandler.currentState})
    }
    
    input = (event) => {
        event.preventDefault()
        this.setState({value: event.target.value}); 
        
    }
    submit = (event) =>{
        event.preventDefault()
        this.setState({lives: this.state.lives - !this.wordHandler.guess(this.state.value)}) 
        this.setState({value:''}) 
        this.setState({text: this.wordHandler.currentState})
        this.finalCheck()
    }
    render(){
        return( 
        <form onSubmit = {this.submit} id = "submit">
            <h1 style = {{letterSpacing: "10px"}}>{this.state.text}</h1>
            <input type="text" id ="input" onChange={this.input} value={this.state.value}></input>
            <input type="submit" value="Guess"></input>
            <h2>Lives: {this.state.lives}</h2>
        </form>
        )
    }

    finalCheck(){
        if(this.wordHandler.currentState.indexOf('_') <= -1){
            alert('You Win!')
            return true 
        }
        else if(this.state.lives === 0){
            alert('You Lose!')
            return true
        }
        else{
            return false
        }

    }
}

export default Input