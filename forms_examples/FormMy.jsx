import React from 'react'

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")

    /**
     * Challenge #2: Track the applicant's last name as well
     */

    console.log(firstName, lastName)

    function handleChange(event) {
        
        // console.log(event.target.value)
        // console.log("Changed!")
        /**
         * Challenge #1: update the firstName state on every keystroke
         */
        setFirstName(event.target.value)
    }

    function handleChangeLastName(event) {
        setLastName(event.target.value)
    }

    return (
        <form>
            <input
                type='text'
                placeholder='First Name'
                onChange={handleChange}    
            />

            <input
                type='text'
                placeholder='Last Name'
                onChange={handleChangeLastName}    
            />
        </form>
    )
}