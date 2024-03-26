import { useParams } from 'react-router-dom'

function About() {
//   const { id } = useParams()
  const text = useParams()
    console.log(text)
  return (
    <>
      <h1>About</h1>
      {/* <h2>Hello user: {id}</h2> */}
      <h2>Hello user: {text.id}</h2>
    </>
  )
}

export default About
