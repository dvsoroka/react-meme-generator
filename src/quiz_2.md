1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

a. New value of state (setCount(42))
b. Callback function - whatever the callback function 
   returns === new value of state

(   
    1. New value of the state. 
    2. callback function that takes previous state (prevState) and returns result of calculation using this prevState
)


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.

(When the new state is a string literal or value that cannot be derived from the previous state 
directly e.g. the new state is obtained from the user input.)



3. When would you want to pass the second option (from answer
   above) to the state setter function?

Whenever you DO need the previous value to determine the new value

   (when the new state can be calculated using previous state )
