1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)

(State refers to internal variables of the component.)



2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that component can 
determine what will get displayed on the screen.

(We use props when passing some data from outside of Component and the 
component function never modify (mutate) those data)


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component)

(We use state for internal variables that are changing when Component operate)


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging.

(Immutable means not changable during operation. Props are immutable. State is mutable.)