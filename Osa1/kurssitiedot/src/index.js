import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Content = (props) => {

  const parts = props.parts
  return (
    <div>
        <p><Part parts={parts} index={0}/></p>
        <p><Part parts={parts} index={1}/></p>
        <p><Part parts={parts} index={2}/></p>
    </div>
  )
}

  const Total = (props) => {

  const total = props.parts.reduce((a, b) => a + b.exercises, 0)

  return(
    <p>Number of exercises {total}</p>
  )
}

const Part = (props) => {

return (
<div>
{props.parts[props.index].part} {props.parts[props.index].exercises}
</div>
)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
     parts : [
    {
      part: 'Fundamentals of React',
      exercises: 10,
     },
    {
      part: 'Using props to pass data',
      exercises: 7,
    },
    {
      part: 'State of a component',
      exercises: 14,
    },
  ],
};

  return (
    <div>
        <Header header={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))