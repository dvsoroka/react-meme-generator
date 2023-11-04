import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")

    console.log(firstName, lastName)

    function handleChange(event) {
 //     console.log(event)  // SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}
        
//      console.log(event.target)   //  <input type="text" placeholder="First Name">     // This is the DOM object that triggers this event

        console.log(event.target.value)
        /**
         * Challenge: update the firstName state on every keystroke
         */
        setFirstName(event.target.value)
    }

    function handleChangeSurname(event) {
        setLastName(event.target.value)
//      console.log(lastName)
    }
   
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChangeSurname}
            />
        </form>
    )
}
