// https://scrimba.com/learn/learnreact/react-forms-intro-co2774b5e9623a1cad018bc49

document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault()
    const formElements = event.target.elements
    const {firstName, lastName} = formElements
    submitViaAPI({
        firstName: firstName.value,
        lastName: lastName.value
    })
})

function submitViaAPI(data) {
    console.log(data)
    console.log("Submitted!")
}