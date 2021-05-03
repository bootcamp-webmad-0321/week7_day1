import { Component } from 'react'
import './Button.css'

class Button extends Component {

    constructor() {
        super()
        this.state = {
            text: 'Iniciar la aplicación',
            active: false
        }
    }

    activateApplication = () => {

        // Never directly mutate any state

        // this.state.text = 'Aplicación iniciada'
        // this.state.active = true

        this.setState({
            text: 'Aplicación iniciada',
            active: true
        })

    }

    render() {

        return (

            <button
                className="button"
                style={{ background: this.state.active ? '#c7ffd1' : '#ffc5c5' }}
                onClick={this.activateApplication}
            >
                {this.state.text}
            </button>
        )
    }
}


export default Button