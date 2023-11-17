1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

(Some changes in local storage)


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, render DOM elements

(changes in state)

3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the array stay the same between renders  

(React runs useEffect() function when the dependency is not provided or it consits of an element that has changed)


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function

This array tracks the variables, changes of which will trigger execution of the useEffect() function ( that causes re-rendering of our component)