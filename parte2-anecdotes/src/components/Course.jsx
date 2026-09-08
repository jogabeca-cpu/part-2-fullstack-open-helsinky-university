// Sub-component for course title
const Header = ({ courseName }) => {
  return <h2>{courseName}</h2>
}

// Sub-component for a single part row
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// Sub-component that loops through parts of a course
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

// Sub-component to calculate total exercises per course
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p>
      <strong>total of {totalExercises} exercises</strong>
    </p>
  )
}

// Component to render individual course content
const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course