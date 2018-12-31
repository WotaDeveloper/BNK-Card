import React , { Component } from 'react'
import styled from 'styled-components'

const cardcover = styled.div`
    border-radius: 10px;
    width: 40%;
    height: 60%;
    background: red;
    box-shadow: 2px 2px grey;
`

class Card extends Component {
    render() {
        return (
            <div>
                <cardcover>BNK48</cardcover>
            </div>
        )
    }
}

export default Card
