import { getRequests, getPlumbers, saveCompletion  } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    const plumbers = getPlumbers()
    console.log(plumbers)
    const convertRequestToListElement = (request) => {
        

        return `<li value="${request.id}">${request.description}
        <select id="plumbers">
        <option value="0">Choose</option>
        ${plumbers.map(plumber => `<option value='${request.id}--${plumber.id}'>${plumber.name}</option>`).join("")}
        </select>
        <button class="request__delete"
        id="request--${request.id}">Delete</button></li>`
    }
    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `
            console.log(html)
    return html
}

//deleteRequest()
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Delete = () => {
return `
    <li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
`
}


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--");
            const monthDayYear = new Date()
            const date_created = monthDayYear.toDateString();

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {requestId, plumberId, date_created}
            console.log(completion)

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

            saveCompletion(completion)

        }
    }
)





