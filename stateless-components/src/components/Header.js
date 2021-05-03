import './Header.css'
import Title from './Title'


const Header = props => {

    const subText = <p>{props.subtitleText}</p>         // JSX element
    const className = "hero"                            // JS regular const

    const fullComponent = (
        <>
            <hr />
            <header className={className}>
                <Title text={props.titleText} />
                {subText}
                <hr></hr>
            </header>
        </>
    )

    return fullComponent
}




// const Header = props => {

//     return (
//         <header className="hero">
//             <Title text={props.titleText} />
//             <p>{props.subtitleText}</p>
//             <hr></hr>
//         </header>
//     )
// }

export default Header