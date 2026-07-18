// Sub-component for the main course title
const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>
}

// Sub-component for a single part row
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// Sub-component that loops through all parts using .map()
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

// Sub-component to calculate the sum using reduce as instructed
const Total = ({ parts }) => {
  // Using reduce with log to see the accumulation step by step
  const totalExercises = parts.reduce((sum, part) => {
    console.log('what is happening', sum, part)
    return sum + part.exercises
  }, 0) // Important: initial value set to 0 to sum object properties properly

  return (
    <p>
      <strong>total of {totalExercises} exercises</strong>
    </p>
  )
}

// The main Course component that gathers everything
const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App