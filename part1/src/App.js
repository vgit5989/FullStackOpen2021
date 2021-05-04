import React from 'react'

const Header = ({ course }) => ( <h1>{course}</h1>   )

const Part = ({ p, exc }) => ( <p> {p} {exc} </p> )

const Content = (props) => {
  const { parts } = props;
  return (
    <>
      <Part p={parts[0].name} exc={parts[0].excercises} />
      <Part p={parts[1].name} exc={parts[1].excercises} />
      <Part p={parts[2].name} exc={parts[2].excercises} />
    </>
  )
}

const Total = ({ parts }) => (
      <p>Number of excercises: {parts[0].excercises + parts[1].excercises + parts[2].excercises}</p>
  )

const App = () => {
  const course = {
    name: 'Half Stack Application development',
    parts: [
      {
        name: 'Fundamentals to React',
        excercises: 10
      },
      {
        name: 'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of a component',
        excercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App