import './App.css'
import Header from './Header'
import Card from './Card'
import Button from './Button'
import Player from 'react-player'
import Title from './Title'

const App = () => {

    return (

        <main>

            <Header titleText="IronHackers webmad 0321" subtitleText="Vienen curvas así que agárrate" />

            <section>

                <Card
                    image="https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/419665d2-74b7-49d4-b3c8-3aea253f966f.jpg" name="Arthur"
                    lastName="Doe"
                    age="33"
                    job="Fontanero"
                    active="true"
                />
                <Card
                    image="https://miro.medium.com/max/12000/1*PgIo7r6qQXem8BmWd-vksQ.jpeg"
                    name="Miriam"
                    lastName="Lopez"
                    age="33"
                    job="Developer"
                    active="true"
                />
                <Card
                    image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg" name="Diana"
                    lastName="Millan"
                    age="33"
                    job="Arquitecto"
                    active="true"
                />
                <Card
                    image="https://avada.theme-fusion.com/wp-content/uploads/2019/07/person_sample_4.jpg"
                    name="Arthur"
                    lastName="Michel"
                    age="33"
                    job="Developer"
                    active="false"
                />
                <Card
                    image="https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg"
                    name="Cyntia"
                    lastName="Ramirez"
                    age="33"
                    job="Model"
                    active="true"
                />

                <Button size="big" href="https://www.ironhack.com" text="Ver todxs" />

            </section>

            <section>

                <Title text="Y ahora un vídeo de Karina" />
                <Player
                    url="https://www.youtube.com/watch?v=FginhFF0AKE"
                    playing="true"
                    controls
                />

                <Button link="https://www.youtube.com/watch?v=FginhFF0AKE" text="Ver el vídeo en Youtube" size="big" />
            </section>

        </main>
    )
}

export default App