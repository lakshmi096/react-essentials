import React, { useReducer } from 'react'

function Checkbox() {
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    )
    return (
        <>
            <label htmlFor="checkit">{checked ? "checked" : "not checked" }</label>
            <input id="checkit" type="checkbox" value={checked} onChange={toggle}/>
        </>
    )
}

export default Checkbox
