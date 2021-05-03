import './Card.css'
import Button from './Button'

const Card = props => {

    console.log('Estas son las props del alumno:', props)

    return (

        <article className="student-card" style={{ backgroundColor: props.active === 'false' ? '#ccc' : 'white' }}>

            <img src={props.image} alt={`${props.name} ${props.lastName}`} />
            <h3>{props.name} {props.lastName}</h3>
            <hr />
            <p>Edad: {props.age} años | {props.job}</p>
            <Button text="Eliminar" customStyle="danger" link="/eliminar" />

        </article>
    )
}

export default Card