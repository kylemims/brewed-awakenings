import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => {
    let orderProduct = ""

    for (const product of allProducts) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}

//___________________________________________________________________//
// Function whose responsibility is to find the employee for an order


// 1. define a callback function whose value will equal the return value of "let orderEmployee"
const findEmployee = (order, allEmployees) => {
    let orderEmployee = ""
// 2. Loop over the "allEmployees" array -> temporarily store the current employee object in the variable named "employee"
    for (const employee of allEmployees) {
//      3. IF the id of the employee matches "===" employeeId on the order...
        if (employee.id === order.employeeId) {
//          4. Store the {employee} object inside the "orderEmployee" variable
            orderEmployee = employee
        }
    }
//  5. After the loop ends, return the object we found and stored. 
    return orderEmployee
}

// Example of how to use the .find() method instead of using the for..of
// const findEmployee = (order, allEmployees) => {
// return allEmployees.find(employee => employee.id === order.employeeId)



export const Orders = () => {
  
    let ordersHTML = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order, products)
{
    // each list item holds the employee.id and marks the element as an "employee".
        ordersHTML += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
}   
    }

    ordersHTML += "</ul>"
    
    return ordersHTML

}
