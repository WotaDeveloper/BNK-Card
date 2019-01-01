import React , { Component } from 'react'
import styled from 'styled-components'
import '../App.css'

const RandomButton = styled.button`
    width: 5%;
    height: 40%;
    background: blue;
    color: yellow;
    border-radius: 5px;
    border-color: black;
`
class Random extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            counter: 0,
            cardnum: 0,
            member: ""
        }
    }

    randomCard() {
        // let member = ["Tarwaan","Ratah","Wee","Font","Man"]
        let randomNumber = Math.floor((Math.random()*24))
        this.setState({
            cardnum: randomNumber,
            member: ["Tarwaan","Cherprang","Music","Jane","Namsai","Namneung","Orn","Kaew","Pun","Kate","Jaa","Mobile","Mind","Jennis","Jib","Miori","Izurina","Nink","Pupe","Korn","Kaimook","Satchan","Piam","Noey"]
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

    lyric = () => {
        alert("Kimi wa melody~")
    }

    render() {
        return (
            <div>
                <Idol name="BNK48" show={this.lyric} />
                <h1>Counter : {this.state.counter}</h1>
                <h3>Your Kamioshi: {this.state.member[this.state.cardnum]}</h3>
                <div className="buttonna">
                    <button onClick={this.addClick.bind(this)}>+</button> 
                    <RandomButton className="randombutton" onClick={this.randomCard.bind(this)}>.</RandomButton>
                    <button onClick={this.removeClick.bind(this)}>-</button>
                </div>
            </div>
        )
    }
}

class Idol extends Component {
    render() {
        return (
            <div>
                <h1>I love {this.props.name}</h1>
                <button onClick={this.props.show}>Show Lyric</button>
            </div>
        )
    }
}

export default Random