import { useState } from 'react'

const Part = (props) => {
    console.log(props)
    return (
        <p>
        {props.part} {props.exercises}
        </p>
    )
    }

const Content = (props) => {
    console.log(props)
    return (
        <div>
        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises3} />
        </div>
    )
    }

    export default Content  // Export the Content component