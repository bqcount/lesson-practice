const { useState } = React

const app = document.querySelector('#app')
const root = ReactDOM.createRoot(app)



const Welcome = ({ name, age }) => <h1>Welcome {name}, you are {age}</h1>

function Description(props) {
    return (
        <p>{props.description}</p>
    )
}

function Student(props) {
    return (
        <>
            <h1>Name: {props.name} - Grades: {props.grades}</h1>
            <Description description={props.description} />
        </>
    )
}

function Date(props) {
    return (
        <p>Today is: {props.today}</p>
    )
}

function Name(props) {
    return (
        <>
            <h1>Hello, {props.name}</h1>
            <Date today={props.today} />
        </>
    )
}

function Button() {

    const [count, setCount] = useState(0)

    function handleClick(e) {
        setCount(count + 1)
        console.log(e);
        console.log('You clicked me!');
    }

    return (
        <>
            <button onClick={handleClick}>
                Click me
            </button>
            <p>{count}</p>
        </>
    );
}

const Formulario = () => {
    const [name, setName] = useState("")
    const [valid, setValid] = useState("")
    // const [password, setPassword] = useState("")
    const handleName = (e) => {
        if(e.target.value.length>=4) setValid("valid")
        else setValid("notValid")

        setName(e.target.value)
        // setPassword(e.target.value)
    }

    return (
        <>
            <input type="text" className={valid} placeholder onChange={handleName} />
            <p>{name}</p>
            {/* <input type="password" placeholder onChange={handleName} />
            <p>{password}</p> */}
        </>
    )
}

const element = (
    <>
        <Welcome name="Fabio" age="27" />
        <Welcome name="Musa" age={24} />
        <Student name="Sara Suárez" grades="7.5" description='Excellent student' />
        {/* Independent practice */}
        <Name name="Sara" today='Friday' />
        <Button />
        <Formulario />
        
    </>
)


root.render(element)

