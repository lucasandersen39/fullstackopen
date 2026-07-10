
const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
    <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
    </div>
)

const Part = (props) => (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
)

const Total = (props) => <p><b>total of {props.total} exercises</b></p>

const Course = ({ course }) => {
    // const total = course.parts[0].exercises +
    //     course.parts[1].exercises +
    //     course.parts[2].exercises
    const total = course.parts.reduce((accumulated, currentValue) => {
        return accumulated + currentValue.exercises
    }, 0)
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total
                total={total}
            />
        </div>
    )
}

export default Course