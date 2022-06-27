import React, { useState } from 'react'

function Form() {
    const [employee, setEmployee] = React.useState(
        {
            name: 'deepak',
            age: 26
        }
    )
    const [display, setDisplay] = React.useState(false)
    return (
        <>
            <input type='text' value={employee.name} onChange={(e) => { setEmployee({ ...employee, name: e.target.value }) }} />
            <br />
            <input type='number' value={employee.age} onChange={(e) => { setEmployee({ ...employee, age: e.target.value }) }} />
            <br />
            <button onClick={() => { setDisplay(true) }}>Save</button>
            {display &&
                <>
                    <h1>{employee.name}</h1>
                    <h2>{employee.age}</h2>
                </>}
        </>
    )
}

export default Form