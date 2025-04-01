import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let employeesHTML = "<ul>"

    for (const employee of employees) {
        employeesHTML += `<li data-type="employee" 
                            data-id="${employee.id}"
                            data-name="${employee.name}">
                            ${employee.name}</li>`
    }

    employeesHTML += "</ul>"

    return employeesHTML
}

const orders = getOrders()

// THE BLOCK BELOW WORKS SIMILAR TO THE BLOCK USING PARSEINT AND .FILTER!!!!!!!
// const employeeOrders = (id) => {
//     let fulfillOrders = 0

//     for (const order of orders) {
//         if (order.employeeId === id) {
//             fulfillOrders++
//         }
//     }
//         return fulfillOrders
// }


document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
    
    // use the if statement to confirm the 
    if (itemClicked.dataset.type === "employee") {

        const employeeId = parseInt(itemClicked.dataset.id)
        const employeeOrders = orders.filter(order => order.employeeId === employeeId)

        window.alert(`${itemClicked.dataset.name} has sold ${employeeOrders.length} products`)
    }
})