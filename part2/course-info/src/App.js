import React from "react";
import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack Application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals to React",
          excercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          excercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          excercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          excercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node JS",
      id: 2,
      parts: [
        {
          name: "Routing",
          excercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          excercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
