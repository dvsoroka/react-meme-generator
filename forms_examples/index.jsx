import React from "react"
import ReactDOM from "react-dom/client"
//import Form from "./Form"
//import Form from "./FormOld"
import Form from "./FormMy"

//ReactDOM.render(<Form />, document.getElementById("root"))

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode> 
        <Form />
    </React.StrictMode>,
)