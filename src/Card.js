import React, { Component } from 'react'

export class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: this.props.image,
            Name: this.props.Name,
            folower: this.props.folower,
            language: this.props.language
        }

    }
    render() {
        return (
            <div className="m-1 p-2 border shadow-sm p-3 mb-2 bg-black rounded" style={{ "borderBlock": "black" }}><header>
                <div className="m-3 p-1" style={{ "width": "150px", "height": "100px", "font-size": "14px" }}>
                    <div className="" >{this.state.Name}</div>
                </div>
            </header></div>
        )
    }
}

export default Card
