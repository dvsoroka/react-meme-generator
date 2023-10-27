import React from "react"
import Header from "./components/Header6"
import Body from "./components/Body6"

export default function App() {
    const [user, setUser] = React.useState("Joe")
    return (
        <main>
            <Header user={user}/>
            <Body user={user}/>
        </main>
    )
}