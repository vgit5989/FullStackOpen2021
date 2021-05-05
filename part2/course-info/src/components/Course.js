const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ p, exc }) => (
  <p>
    {p} {exc}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} p={part.name} exc={part.excercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of excercises:
      {parts.reduce((s, v) => s + v.excercises, 0)}
    </p>
  );
};

const Course = ({ course }) => (
  <div>
    <Header key={course.id} course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
