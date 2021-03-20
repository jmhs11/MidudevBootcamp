import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Llevemos los cambios un paso más allá. 
 * Cambie el curso y sus partes en un solo objeto JavaScript. 
 * Arregle todo lo que se rompa.
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.reduce((total, part) => total += part.exercises, 0)} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))