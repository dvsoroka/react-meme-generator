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
    //  <form>
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
                /* The idea is that the state that you are maintaining in your component should be the single source of truth.
Here in the markup inside of our inputs each of these inputs in a fact is holding its own STATE;
think how in a regular HTML form no React involved at all when a user types into an input box essentially that 
input box is maintaining its own state, in this case we have two pieces of state:
- one is being held by the input box just in regular HTML 
- other is updating on every keystroke held in out React code.
of course we have set it up so that the state of our input box then perfectly gets mirrores by our state in React,
however a good practice in React is to make it so that your React state is what drives the state that's visible inside the iput box.
split hairs - вдаваться в такие тонкости.
All this really boils down to is simply adding a "value" property to each one of our inputs.
So, here at the bottom of each one we'll add "value = {" and all we need to do is add the piece of state in other
words formData. and then the name of that specific iput into that "value" (for the first one that would be value={formData.firstName}, etc).
Visually we're not going to see any difference here, conceptually, however, when I type into the first name "Bob" the value of this 
input box is no longer being controlled by the input but rather by React. 
Every change that I make runs my handleChange() function which then updates the correct piece of state which rerenders my <form> and
it sets the value of my form input to be whatever state is value={formData.firstName}; 
So now state is in the driver's seat telling the input box what to display rather than the input box telling the state what to be.
Just remember that you need to set the value of your inputs to be equal to your state that represents that input value
*/
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
                name="email"        // this name exactly matches the name that we chose in our state object (// this name should be exactly the same as the corresponding field in the state object React.useState({firstName: "", lastName: "", email: ""})  )
                value={formData.email}
            />
{/*         <textarea>Whatever you put inside is the value of the textarea </textarea>           
    In regular HTML teh <textarea> is not self closing - it has its own separateclosing tag </textarea> and in HTML whatever you put inside 
 the opening and closing tag is the value of that textarea, we can also set the size with rows and columns, the user can make this bigger or
 smaller if they need to. However, what the React team has done is they've chosen to make the <textarea> much more similar to a text-based
 input: they've taken the closing tag away - they've made it a self-closing element <textarea /> and just like our <input>-s we will now 
 add a "value" property to it, and that's going to be the value that's inside of the textarea. Additionaly in the textarea you probably
 not going to include a "type" because the textarea is sort of its own type already but everything else should essentially be the same as
 our <input>-s.
*/}
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

Checkboxes aren't just an HTML element on their own called "checkbox", but NO - they are an <input /> with a type of "checkbox". 
Checkboxes are fundamentally different than we have been working with so far with our text inputs because they just hold boolean values.
In other words there's not going to be some kind of string text of my "checkbox", instead there is a property, called "checked", that will 
either be "true" or "false" based on whether the user has checked the box or not. 
  So now we have a checkbox that asks the person if they're friendly or not and we want to maintain this in state. Because it's a checkbox, 
we're not maintaining a string. So up in state I'm going to add another piece of state and we call it "isFrienly" and put it to "true" as 
the default:  React.useState({ isFrienly: true})
To associate our state "isFriendly" with our checkbox we're not going to use someting like a "value" property but instead 
we're going to use a "checked" property; because a checkbox is either checked or unchecked, the value that we put in here for checked 
needs to be a boolean or at least whatever you put in will be interpreted as a boolean:
if I put someting truthy like the string "Hi":
        <input                          
                type="checkbox"              
                id="isFriendly"              
                checked={Hi}   
        />    
it's going to check the box, but if I put there something faulsey like an empty string checked={""} it's going to not chek the box. 
But in the end that doesn't really matter because this should be a boolean value so I'm going to say: checked={formData.isFriendly}.
At the begining it should be checked because our default value is "true", so whaen we say this box has checked we are having React 
dictating to the box that is is checked in fact because that's what state is; of course now we've introduced a bit of a bug: 
I can't uncheckthe box. If we want this to act like a normal form if we look closely to our handleChange() function, we have only been 
looking at event.target.value (by setting [event.target.name]: event.target.value) 
however with a checkbox we are not looking at the "value" property anymore, we are looking at a "checked" property.
To reuse our same onChange={handlechange} function we're going to make some modifications here:
the first, best practice is NOT to put the entire event.targer.value and event.target.name inside of our setFormData(prev => {})
a much better way to handle this is to destructure event.target and pull out the values that we need, so we need a "name" and "value" from event.target:
    
    const {name, value} = event.target 

and then I can switch this to [name]: value in the handleChange() function
and then as I mentioned when handling a checkbox there's a few more things we need to pass in:
- one property that will come in is this "type" property on all of our <input>-s we have a type="text", "email"
and downhere our type our type of "checkbox". So let's bring in that "type" into our destucturing of event.target

    const {name, value, type} = event.target

so we can check wether or not the input that's making this handdleChange() function run is a type of "checkbox", 
and if it is we're also going to need the "checked" property:

    const {name, value, type, checked} = event.target

and this "checked" property is either going to be "true" or "false" depending on how the user has interacted with the checkbox.
Now comes a bit of a trick, when I'm setting my fomData I want everything else essentially be the same:

    function handleChange(event) {              
        const {name, value, type, checked} = event.target 
        setFormData(prevFormData => {         
            return {                            
                ...prevFormData,              
   //           [event.target.name]: event.target.value   
                [name]: value
            }                          
        })                                      
    }

  however the peece of state that I want to update if it's a checkbox, in our case the "isFriendly" property should not take on "value"
  but rather should take on the value of "checked", so I can use a ternary here that says: 
  "is this the type equal to checkbox? if so, I want you to use the "checked" property, but if NOT, I want you to use the "value" property"

                [name]: type === "checkbox" ? checked : value 

  We also have to add name="isFriendly" this needs to match exacly what is in state to our <input type=checkbox /> for our handleChange() function to work properly:
*/}
            <input                          
                type="checkbox"            
                id="isFriendly"              
                checked={formData.isFriendly}    
                onChange={handleChange}          
                name="isFriendly"               //  this needs to match exacly what is in state
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
{/* We haven't yet talked about this "htmlFor" property; when  we have something like a <label> that is supposed to be tied to another <input>
 you have a couple options: you could nest the <input> directly inside of the children of the label:

            <label htmlFor="isFriendly">Are you friendly? 
                <input 
                    type="checkbox" 
                    id="isFriendly"
                    checked={formData.isFriendly} 
                    onChange={handleChange}
                    name="isFriendly"
                />
            </label>

 what that does is if the <label> gets clicked it will automaticlly propagate thet "click" down to that input, however, my personal prefernce is 
 to  keep the <label> as its own separate element and then point that <label> using "htmlFor" to the "id" of an <input> so they can be associated
 with one another. In plain HTML you're probably used to using just "for", but if you were look under the hood at underlying DOM element, it's
 really called "htmlFor" - that's the javascript property for that element 
 */}
            <br />
            <br />

{/* 
    In React radio-buttons are kind of an interesting combination of checkboxes and text <input>-s. The following fieldset asks about our 
  current employment status. We've already added the type="radio" and some "id"-s in order to associate the labels using "htmlFor" with 
  the correct iputs. So how we can hook these radio buttons into our form and connect it with our state:

            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
          
  First we need a place in state to hold all of this information; I'll add another property to our state called "emploument":

  const [formData, setFormData] = React.useState(
            {
                firstName: "", 
                lastName: "", 
                email: "", 
                comments: "",
                isFriendly: true,
                employment: ""
            }

and where checkboxes are either true or false, the radio-buttons similar to <input>-s will have some kind of text value to them; 
in this case I want `employment: ""` to be some kind of string either "Unemployed", "Part-time" or "Full-time" 
so on a high level of overview what will happen is when the user clicks one of tese options we will be watching for changes in these inputs
and when a change happens it will take the value of that specific radio-button that was clicked and set our state to that value.
In order to associate my inputs to the correct piece of state and also to make it so that I can't click all of my inputs sumultaneously
I need to add a "name" property to each of these inputs. Like we've done before I'll set the `name = "employment"` which exactly matches the
property that we are saving in state; the reason we're giving the same name to all three of these radio-buttons is first of all in HTML that's
the way that we make it so only one of these radio-buttons can be selected at any given time, but it also intuitively makes sense because
we're only updating ong property of "employment" based on which one is selected.
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"        
                    value="unemployed" /  "part-time" /  "full-time"
                >
Each of these inputs will have its own unique value and this value is what will actually get saved as the value in state when this
specific input is selected. Next I need to make sure that I'm listening for change events so I'll add  my "onChange={handleChange}".
We'll also be able to use the same handleChange() function.
There's one more small thing that we need to change and it's essentially mirroring what we did when we were setting our value 
equal to the state ( for example  value={formData.comments} ) radio-buttons are a little different because we need to specify 
what value (value="unemployed") the state should take on if the radio-button is selected or checked; however, that means that 
we can't do controlled components in the same way that we did with our <input>-s by setting the "value" equal to whatever the current
value of state is. But that doesn't maen that we can't control these components it's just that radio-buttons are controlled in the 
same way that checkboxes are controlled. Here we were able to say:
                    
                    `checked={formData.isFriendly}`

however, if we try to do the exact same thing thing with our radio-buttons we're going to run into a little bug:

                    `checked={formData.employment}` 

for all of our radio-buttons, and when I click one of them  some wierd stuff is happening.
This is where radio-buttons differ from checkboxes in that when we are controlling the "checked" property we don't simply 
say `checked={formData.employment}` because unlike a checkbox this is not a boolean value but we can make it a boolean 
value by checking if the "formData.employment" is equal to the value of this specific checkbox:

                    `checked={formData.employment === "unemployed"}`    /  "part-time"  /  "full-time"

I'll do this exact same thing to all of our radio-buttons and now  React is in charge of controlling this input 
rather than the input having its own HTML state.
Let me walk through that one more time:
  Initially the value of formData.employment is an empty string "", when I click "unemployed" it runs the onChange() for handleChange(event)
which we have defined:

    function handleChange(event) {             
        const {name, value, type, checked} = event.target 

        setFormData(prevFormData => {           
            return {                            
                ...prevFormData,                
                [name]: type === "checkbox" ? checked : value
            }                                             
        })                                      
    }

   we're pulling the "name", "value", "type" and "checked" out,
we're setting  the formData: we're brinnging its all the old formData, 
now we're using [name]  which we had set to "employment" as the key for our state that we're updating and 
it looks here says "is the type checkbox?" ( [name]: type === "checkbox" ? checked : value ) 
- in reality NO, this is not a checkbox, it's a "radio" and  so it skips the  "checked" value and instead uses this last "value";
and this "value" that we defined here where we said it's either  "unemployed", "part-time"  or "full-time";
then, when we change STATE, React re-renders our <form> it checks to see if the current  formData.employment is equal to "unemployed", - in our
case since that's the one we chose, then that becomes a true statement and therefore "checked" ([name])  is "true" (value) and all of these 
other checks are "false" that makes it so that only one of these can be checked at any given time.

*/}
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
{/*
  Select box with its options. 
In regular HTML it's usually set up something like this, where you have the  <select box where i've added an id="favcolor" just so we can
associate our label with it and it has a number of options inside with a value for each option:

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option selected value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

 In regular HTML in order to grab the value of whichever one is selected you will look for a property called  "selected",
 although that would happen in the JavaScript but all of this is a bit beside the point because React decided to make it a lot more
 similar to the other <input> elements that we have seen so far. So just like we've done with some other elements we are going to 
 add a "value" propery here on the <select value="">  itself and this value similar to our text <input>s we'll just mirror what we 
 have in STATE. Let's add the "favColor" to state, we'll start it off as an empty string "" 

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

and then down here in our <select> orm we will say: value={formData.favColor},
we can reuse the same onChange() handler that we've been using with handleChange()
and in order for handleChange() to work correctly we need to make sure that we mirror our "name" to exactly equal the property 
that we're saving in STATE.
  Now we do one little issue here if I hit "refresh" we see that I'm initializing STATE as an empty string for the favorite color, 
but currently I don't have an option that rpresents the empty string value.
One way I can change this is by providing a new option where the value is an empty string and put inside a text "--Choose--" that it 
makes so that the user will see "Choose" here on the first option :

            <option value="">--Choose--</option>
  */}
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

{/* Submit button
  Now that we have a way to gather all of this information from our user we need to be able to submit to submit the form.
In HTML there is an <input > of type "submit"; and <input type=submit /> is basically just a button and of course the default 
option is "submit" we can change the value="" to something different and that changes the text of the button. 
However in HTML5 they made it so that the actual <button> element if it's found inside of a <form></form> 
acts like a "submit" button. What's nice about the <button> element inside the <form> is that you're not doing this
wierd value=  thing because it's not really a value, it's just the text of the button.
And because this <button> is found inside of a <form> element its type is actually automatically "submit" by default

            <button type="submit">Submit</button>

in fact if you didn't want it to act like a submit button you'd have to actually change the type to "button" 

            <button type="button">myButton</button>

which looks kind of funny "button type button". So let's just make use of that default, we'll get rid of our "type=" completely
and therefore the defaoult is type="submit", and clicking this button because the button is found inside of a form will 
actually trigger the form's "onSubmit" event handler 
  
    <form onSubmit={handleSubmit}> 

now back in the day instead of having a javascript osSubmit handler you might have something like method that tells you 
this is going to be a POST request and you'd had an "action" that probably will led to somePhp.php file

    <form method="POST" action="somePhp.php">

and then PHP would take the data and process it, do whatever you nedded to do, however, we're going to essentially bypass that entire system.
We're going to set up onSubmit event handler and let's create a function called "handleSubmit".
And what's nice about the way we have set up our form in React is now instead of having to go through every one of out inputs and 
gather the values right at the last second before we submit this to, maybe, an API, we've been doing all that work all along as we've 
been updating STATE in every change of the <input>-s and elements in our <form>. 
So if we pretended that we have some kind of submitToApi() function we would really just be able to probably pass our formData object into 
that function becuse it's already updated, - it's been updated after every change of the form

        function handleSubmit() {
            submitToApi(fomData)
        }

Now jaust like in vanilla JavaScript if you have built a form and gathered the data in javascript, yu know that ckicking this "submit" 
button will actually refresh this page and it'll put all of the form values as part of a query string in the URL that all 
harkens (слушает) back to the original way that forms were submitted with an "action" propery.
  So the first thing we will always want to do in React when we're handling a formSubmit is to take that event object that will get passed
to this event handler and run event.preventDefault()

    function handleSubmit(event) {
        event.preventDefault()
        //submitToApi(formData)
        console.log(formData)
    }

preventing the default means that it won't refresh our page and essentially re-render our App with all of these default values in STATE 
preventDefault() just stops all of that from happening and makes it so that we can run code the way that we actually want to. 
Let's just console.log our formData
*/}

{/*            <input type="submit" value="Sent it in" />           in HTML it "submit was just one of the <input>s */}
            <br />
            <button>Submit</button>            {/*  in HTML 5  the <button> tag with the default behaviour of "submit" was introduced (if it is placed inside the <form> ) */}
            <button type="button">Button(NoSubmit)</button>         {/*  in HTML 5 if you don't want to submit, then put the type="button" (the defaoult type is "submit")   */}
                                                                    {/*  https://scrimba.com/learn/learnreact/forms-in-react-submitting-the-form-coe43436db60b0c21a1cca067   */}
        </form>
    )
}
// As of right now our inputs are CONTROLLED!
// https://scrimba.com/learn/learnreact/form-state-object-practice-cob444ddabb8e498d051b98cb
