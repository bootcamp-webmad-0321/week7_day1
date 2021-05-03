import './Button.css'

const Button = props => {

    console.log('Estas son las props del botón:', props)

    const buttonStyle = {
        margin: '10px',
        backgroundColor: props.customStyle === 'danger' ? '#fcbdbd' : '#d8fcd8',
        display: props.inline ? 'inline-block' : 'block',
        width: props.size === 'big' ? '300px' : '150px'
    }

    return (
        <a style={buttonStyle} href={props.link} className="button">
            {props.text}
        </a>
    )
}

export default Button