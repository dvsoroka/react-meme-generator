import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")        // First of all we need some state to haold the current data that's typed into our input
    const [lastName, setLastName] = React.useState("")          // I will set an empty string "" as the default because I expect my input to be an empty box in the begining. 
                                                                // and now what I need to do is listen for any changes that happen to this input:
                                                                //               onChange={handleChange}   // we put it below in the form and declare that function handleChange()        
    console.log(firstName)

    function handleFirstNameChange(event) {
//      console.log("Changed!") 
//      console.log(event.target)   //  <input type="text" placeholder="First Name">    // It shows the HTML element (DOM object) that triggered this event.
                                                                                        // That DOM object has the .value property

//      console.log(event.target.value)
        /**
         * Challenge: update the firstName state on every keystroke
         */
        setFirstName(event.target.value)    //   In this case I don't need to know what the used to be in order to determine what the state is about to be 
                                            // because I have quick and easy access to the information that's currently typed into the input box by accessing event.target.value
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
//      console.log(lastName)
    }
   
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}         // and now what I need to do is listen for any changes that happen to this input
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}
