1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?

Right before the form is submitted. Usually you listen to the "onSubmit" event and then you go 
to the each one of the elements in the form and gather the data

   (At the point of submitting the <form>)


2. In a React app, when do you gather all the data from
   the filled-out form?

In the React App we basically NOT allowing the elements to maintain their own internal state,
but instead, the component that houses the entire form as some React STATE and that state is updated on every change of the elements in our form;
in a short: As the form is being filled out. The data is all held in local state.

   (Just when filling fields of the form we are forming the state object that helds all the data )

3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
   
   ("name")

4. What's different about saving the data from a checkbox element
   vs. other form elements?
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.


(Instead of "name: value" pair there would be "name: checked" or "name: "" " when corresponding field has a boolean value of true or false;
so, we use [name]: type === "checkbox" ? checked : value  in our  handleChange() function
  so the name would be setted to boolean)

5. How do you watch for a form submit? How can you trigger
   a form submit?
- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.

(In the <form tag we have onSubmit event that triggers handleSubmit() function)