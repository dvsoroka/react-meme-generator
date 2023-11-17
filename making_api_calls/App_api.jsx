import React from "react"

export default function App() {
//  const [data, setData] = React.useState({})
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    console.log("Component rendered") // We've got an infinite loop in console!  while fetching the data from API  because 
                                        // this fetch("https://swapi.dev/api/people/1") below is kind of living on sort of the top level of our component. 
                                        // Because of that any time the component  renders it's going to call fetch() and every time it calls fetch() it's
                                        // going to setStarWarsData(data) which is updating our state and therefore causing React to re-render this component
                                        // and then it's running fetch() again, setting the state, re-rendering this component...
!
    // 1. GET the data (fetch)
    // 2. Save the data to state

//     fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//to prevent infinite loop comment the following line and simply log our "data" without running setData() function
// //      .then(data => setStarWarsData(data)) 
//         .then(data => console.log(data))

// Using the Effect Hook  https://legacy.reactjs.org/docs/hooks-effect.html
// https://overreacted.io/a-complete-guide-to-useeffect/
// Let us refactor our code by creating a side effect using React.useEffect() hook
// useEffect() has one required parameter - a function - a callback function; and a second optional parameter is the dependency array

//  React.useEffect(() => {})

    /*** https://scrimba.com/learn/learnreact/useeffect-when-to-use-dependencies-co87f48fc9c487d958ddeca4a
     * Challenge #01: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */

//      React.useEffect(function() {
        React.useEffect(() => {
        console.log("Effect function ran")
//#01   fetch("https://swapi.dev/api/people/1")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data)) 
//          .then(data => console.log(data))


//  })
//  }, [])       // It will cause one run of fetch() and even if we hit the "Add button" it will not trigger useEffect() again because we do not watching at "count"  
//  }, [0])
//  }, [1])
    }, [count])  //  [0]  compared to [1]  It will re-run useEffect() any time "count" changes.
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}
