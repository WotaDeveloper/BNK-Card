import React , { Component } from 'react'
import styled from 'styled-components'
import '../App.css'

const RandomButton = styled.button`
    width: 5%;
    height: 40%;
    background: blue;
    color: yellow;
    border-radius: 5px;
`
class Random extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            counter: 0,
            cardnum: 0
        }
    }

    randomCard() {
        let randomNumber = Math.floor((Math.random()*10) + 1)
        this.setState({
            cardnum: randomNumber
        })
    }

    addClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    removeClick() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <h2>Number : {this.state.cardnum}</h2>
                <div className="buttonna">
                    <button onClick={this.addClick.bind(this)}>+</button> 
                    <RandomButton className="randombutton" onClick={this.randomCard.bind(this)}>Random</RandomButton>
                    <button onClick={this.removeClick.bind(this)}>-</button>
                </div>
            </div>
        )
    }
}

export default Random