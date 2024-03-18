const app = document.querySelector('#app')
const root = ReactDOM.createRoot(app)

// const element1 = React.createElement('h1', { id: 'title1', class: 'wrapper' }, 'Hello World')
// const element2 = React.createElement('h2', { id: 'title2', class: 'wrapper' }, 'Bye World')
// const element3 = React.createElement('h2', { id: 'title2', class: 'wrapper' }, element2)

// const element = React.createElement(
//     'div',          // ==> type = div
//     { id: 'main' }, // ==> props = <div id="main">

//       // 3rd parameter: element children... if any!

//         // create a child with no tag
//         'Welcome to Reboot',

//           // Create child with createElement inside
//         React.createElement('h2', null, 'Elements inside elements'),
//   )


// root.render([element1, element2])

let user = {
    name: 'Jaimito',
    surname: 'Pérez',
    grades: 10
}

const formatName = (user) => {
    return user.name + ' ' + user.surname
}

// const style = 'red'
// const style = 'green'

const textProps = {
    id: 'hastag',
    className: 'clase'
}

const TITLE = {
    color: 'blue',
    backgroundColor: 'black'
}

const showButton = (active) => {
    return active && <button>Click</button>
}

const welcomeUser = (user) => {
    if (!user) {
        return <h1>Welcome</h1>
    } else {
        return <h1>Welcome {user.name} + {formatName(user)}</h1>
    }
}

const cart = ['camisetas', 'pantalones', 'zapatillas']

const showCart = (cart) => {
    return (
        <ul>
            {cart.map((product, id) => <li key={id}>{product}</li>)}
        </ul>
    )
}

const students = [
    {
        name: 'Antonio López',
        grade: 3.0
    },
    {
        name: 'Juan Pérez',
        grade: 6.1
    },
    {
        name: 'Laura García',
        grade: 7.2
    },
    {
        name: 'Pedro Martín',
        grade: 2.0
    },
    {
        name: 'Marta Medina',
        grade: 6.5
    }
]

const studentsColumnsProps = {
    color: 'blue',
    textDecoration: 'underline'
}

const showStudents = (students) => {

    return (
        <>
            <h2>Aprobados</h2>
            <ol>
                {students.map((student, index) => student.grade > 5 && (<li key={index}>
                    <span style={studentsColumnsProps}>Nombre: </span>
                    {student.name}
                    <span style={studentsColumnsProps}>Nota:</span> 
                     {student.grade}</li>
                ))}

            </ol>
        </>
    )
} 

// const element = <h1>Hello World</h1>
const elementInput = (
    <>
        {welcomeUser(user)}
        {showButton(true)}
        <h1 className={user.grades < 5 ? 'red' : 'green'}>Welcome, {formatName(user)}</h1>
        <input type="text" />
        <button type="button">Click</button>
        <p {...textProps}></p>
        <h2 style={TITLE}>titulo</h2> 
        {showCart(cart)} 
        {showStudents(students)} 
    </>
)



root.render(elementInput)
// root.render([element, elementInput])

