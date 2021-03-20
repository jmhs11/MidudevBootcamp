import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Y luego coloque los objetos en una matriz. 
 * Modifique las definiciones de variables de App de la siguiente
 * forma y modifique las otras partes de la aplicación en consecuencia:
 */

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ parts }) => {
  let partsRender = parts.map(part =>
  (
    <Part key={part.name} name={part.name} exercise={part.exercises} />
  )
  );

  return (
    <div>
      {partsRender}
    </div>
  )
}

const Part = ({ name, exercise }) => {
  return (
    <p>
      {name} {exercise}
    </p>
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts.reduce((total, part) => total += part.exercises, 0)} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))