import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState('Ismail');
    const [age, setAge] = useState(21)

    const clickMe = (event) => {
        console.log('Hey you there' + name)
        console.log('THis is your age' + age)
    }

    return(
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={clickMe}>Click Me!</button>
        </div>
    )
}

export default Home;