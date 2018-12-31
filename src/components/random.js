import React , { Component } from 'react'

class Random extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
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
                <div>
                    <button onClick={this.addClick.bind(this)}>+</button> 
                    <button onClick={this.removeClick.bind(this)}>-</button>
                </div>
            </div>
        )
    }
}

export default Random