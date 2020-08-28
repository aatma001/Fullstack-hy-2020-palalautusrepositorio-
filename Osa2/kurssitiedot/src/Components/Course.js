import React from 'react';

const Header = props => (
    <>
        <h2>{props.name}</h2>
    </>
)

  
const Total = ({course}) => {
const total = course.reduce((a, b) => a + b.exercises, 0)
  
    return(
      <p>Number of exercises {total}</p>
    )
}
  
const Part = ({course}) => {
return (
    <div>
        <ul>
            {course.map(part =>
                <li key={part.id}>
                {part.name} {part.exercises}
              </li>
            )}
        </ul>
    </div>
  )  
}

const Content = ({courses}) => {
    return (
        courses.map(course => (
            <div key={course.id}>
            <Header name={course.name}/>
            <Part course={course.parts}/>
            <Total course={course.parts}/>
            </div>
        )
     )   
) 
}

const Course = ({courses}) => {

    return(
        <div>
            <Content courses={courses}/>
        </div>
    )
}

export default Course;
