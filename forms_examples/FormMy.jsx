import React from 'react'

export default function Form() {
  // const [firstName, setFirstName] = React.useState("")
  // const [lastName, setLastName] = React.useState("")
    const [formData, setFormData] = React.useState({firstName: "", lastName: "", email: ""})

    /**
     * Challenge #2: Track the applicant's last name as well
     * 
     function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
     */

 //   console.log(formData.firstName, formData.lastName, formData.email)
    console.log(formData)

    function handleChange(event) {
        
        //  console.log(event)
        //  console.log(event.target)
            console.log(event.target.name)
            console.log(event.target.value)
        //  console.log(event.target.name, event.target.value)

        // console.log("Changed!")
        /**
         * Challenge #1: update the firstName state on every keystroke
         * 
         * 
         */
        setFormData(prevData => {
            return{
            ...prevData,
//Not!      event.target.name : event.target.value
            [event.target.name] : event.target.value  // Computed properties - I can surrountd my key here in square brackets [event.target.name]
            }                                         // It makes it so I can turn a dynamic string like something saved in a variale "event.target.name"
        })                                            // and use it as a property name for my object
    }


    return (
        <form>
            <input
                type='text'
                placeholder='First Name'
                onChange={handleChange} 
                name='firstName'
                value={formData.firstName}  
            />

            <input
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                name='lastName'
                value={formData.lastName}   
            />
                        <input
                type='email'
                placeholder='E-mail'
                onChange={handleChange}
                name='email'  // this name should be exactly the same as the corresponding field in the state object React.useState({firstName: "", lastName: "", email: ""})  
                value={formData.email}
            />
        </form>
    )
}

/** As of right now our inputs are not controlled. https://scrimba.com/learn/learnreact/controlled-inputs-co5c7481f910db53cc421f020
 * https://legacy.reactjs.org/docs/forms.html#controlled-components
 * The idea is that the state that you are maintaining in your component should be the single source of truth.
 * Here in the markup inside of our inputs each of these inputs in a fact is holding its own STATE;
 * think how in a regular HTML form no React involved at all when a user types into an input box essentially that 
 * input box is maintaining its own state, in this case we have two pieces of state:
 * - one is being held by the input box just in regular HTML 
 * - other is updating on every keystroke held in out React code.
 * of course we have set it up so that the state of our input box then perfectly gets mirrores by our state in React,
 * however a good practice in React is to make it so that your React state is what drives the state that's visible inside the iput box.
 * split hairs - вдаваться в такие тонкости.
 * All this really boils down to is simply adding a "value" property to each one of our inputs.
 * So, here at the bottom of each one we'll add "value = {" and all we need to do is add the piece of state in other
 * words formData. and then the name of that specific iput into that "value" (for the first one that would be value={formData.firstName}, etc).
 * Visually we're not going to see any difference here, conceptually, however, when I type into the first name "Bob" the value of this 
 * input box is no longer being controlled by the iput but rather by React. 
 * Every change that I make runs my handleChange() function which then updates the correct piece of state which rerenders my <form> and
 * it sets the value of my form input to be whatever state is value={formData.firstName}; 
 * So now state is in the driver's seat telling the input box what to display rather than the input box telling the state what to be.
 * Just remeber that the value of your inputs to be equal to your state that represents that input value
 */     