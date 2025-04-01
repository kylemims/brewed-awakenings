import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let productsHTML = "<ul>"

    for (const product of products) {
        productsHTML += `<li data-price="${product.price}"
                            data-name="${product.name}"
                            data-producttype="product">
                            ${product.name}</li>`
    }

    productsHTML += "</ul>"

    return productsHTML
}


document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target

    if (itemClicked.dataset.producttype === "product") {
        
        window.alert(`The price of ${itemClicked.dataset.name} is $${itemClicked.dataset.price}`)
    }
})