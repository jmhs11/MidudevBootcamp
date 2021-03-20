import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Desafortunadamente, toda la aplicación está en el mismo componente. 
 * Refactorice el código para que conste de tres componentes nuevos: Header, Content y Total. 
 * Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. 
 * Header se encarga de representar el nombre del curso, 
 * Content representa las partes y su número de ejercicios y 
 * Total representa el número total de ejercicios.
 */

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Total = ({ exercises }) => {
  return (
    <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))