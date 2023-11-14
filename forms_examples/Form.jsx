// Forms with Controlled Components https://legacy.reactjs.org/docs/forms.html#controlled-components

import React from "react"

export default function Form() {
//  const [firstName, setFirstName] = React.useState("")        // First of all we need some state to hold the current data that's typed into our input I will set an empty string "" as the default because I expect my input to be an empty box in the begining.  and now what I need to do is listen for any changes that happen to this input:
/* 
But what if we have 20 or more input boxes? Its not convenient to have a separate change function for each one of those and a separate piece of state 
for each one of those. We'll learn how to combine our state into an object and how to use the event parameter that we're receiving in our event handlers
to determine which property of that state object we should be updating.
*/                                                                
//  const [firstName, setFirstName] = React.useState({firstName: "", lastName: ""})        // Instead I will put inside an object {} and this object will have a firstName property with the value of an empty string ""       

// then I'll change "firstName" into something more generic like  "formData" and "setFormData":
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )

//  console.log(formData.favColor)

    function handleChange(event) {              // Before when we were simply updating a STRING we didn't care about what the previous version of 
//      console.log(event.target.name)          // that string was because we were just going to overwrite it with whatever was in the input box.
//      console.log(event.target.value)         // This time around we do need to know what the old version of state was because we have a lot of other
   //   const {name, value} = event.target
        const {name, value, type, checked} = event.target 
                                                // properties that we need to maintain instead of just overwrite, so instead of just overwrite so I'll do a
        setFormData(prevFormData => {           // callback function in here I'll use an arrow function and call my previous state let's say: "prevFormData"          
            return {                            // My goal is to return a new object and I want to make sure I keep all of the old object intact, so I'm going          
                ...prevFormData,                // to spread out the previousFormData, but then I'm going to overwrite the specific property that we are trying to
                                                // overwrite or what we're trying to update in this handleChange() event listener. On your first attempt 
// the inclination might be to try something like:        //  event.target.name: event.target.value // however with ES6 there is a feature introduced called "computed properties"; and what this allows me 
   //           [event.target.name]: event.target.value   // to do is surround my "key" here in square brackets; it makes it so I can turn a dynamic string like
                [name]: type === "checkbox" ? checked : value
            }                                             // something saved in a variable (event.target.name) and use it as the propery name for my object.
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()      // Preventing default means that it won't refresh ourpage and essentially rerender our App with all the default values in state
                                // So event.preventDefault() just stops all of that from happening and makes it so we can then run code the way we actually want to.
    //without preventDefault when clicked "submit" we'll update the fields to the default "blanks" and get in the status (URL) string like that:
    // index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
    // or
    // http://localhost:5173/?firstName=Enot&lastName=Racoon&email=Enot%40racoon.com&comments=Commented&isFriendly=on&employment=full-time&favColor=yellow
    // and this is not we want to do     

        //submitToApi(formData)         // If we pretended that we have some form af submitToApi() function so we coul pass our formData object to that function
        console.log(formData)

    }
    return (
    //  <form method="POST" action="somePhp.php">  // instead if that we are going to set onSubmit handler: the function handleSubmit()
         <form onSubmit={handleSubmit}>   
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"       // In order to distinguish which DOM element triggered the event (in event.target)
                                    // we can give a name to each of our input fields with the value that coincides with the key in our state object
                                    // A good practice is to give each of our inputs a "name" propery and make the name propety match exactly 
                                    // the property name in the state that we're saving. And now I have access to event.target.name
                                    // So we have access to the property of STATE that we want to change and we still have access to event.target.value 
                                    // which is the value that we want to change it to. Now we have everything we need to call setFormData() and update our object correctly 
                value={formData.firstName}
            />                              

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            
            <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                name="email"        // this name exactly matches the name that we chose in our state object
                value={formData.email}
            />
{/*         <textarea>Whatever you put inside is the value of the textarea</textarea>           */}
            <textarea 
                placeholder="Put your comments here"
                onChange={handleChange}
                name="comments"
                value={formData.comments}  
            />


{/*             
            <div>
               <input type="checkbox" id="scales" name="scales" checked />
               <label htmlFor="scales">Scales</label>
            </div>

            <div>
               <input type="checkbox" id="horns" name="horns" />
               <label for="horns">Horns</label>
            </div>

            <div>
               <input type="checkbox" id="mybox" name="mybox" />
               <label for="mybox">Mybox</label>
            </div>
*/}
            <input 
                type="checkbox" 
                id="isFriendly"
                checked={formData.isFriendly} 
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"} // https://scrimba.com/learn/learnreact/forms-in-react-radio-buttons-co14c423dbc2026a7a2b997a2
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select         // https://scrimba.com/learn/learnreact/forms-in-react-select-option-co83b466d859cf1d6c4b3efaf
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
  {/*           <input type="submit" value="Sent it in" />           in HTML it "submit was just one of the <input>s */}
            <br />
            <button>Submit</button>            {/*  in HTML 5  the <button> tag with the default behaviour of "submit" was introduced (if it is placed inside the <form> ) */}
            <button type="button">Button(NoSubmit)</button>         {/*  in HTML 5 if you don't want to submit, then put the type="button" (the defaoult type is "submit")   */}
                                                                    {/*  https://scrimba.com/learn/learnreact/forms-in-react-submitting-the-form-coe43436db60b0c21a1cca067   */}
        </form>
    )
}
// As of right now our inputs are CONTROLLED!
// https://scrimba.com/learn/learnreact/form-state-object-practice-cob444ddabb8e498d051b98cb
