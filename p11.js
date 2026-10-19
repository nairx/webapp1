const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 140 }
]

let cart = []

// products.map(product => {
//     console.log(product.name)
// })

// const filteredArray = products.filter(product=> product.price > 100)
// console.log(filteredArray)

// const filteredArray = products.find(product=> product.id === 1)
// console.log(filteredArray)

function addToCart(product){
    cart = [...cart,{...product,quantity:1}]
}

function increment(id){
    cart = cart.map(item => item.id === id ? {...item,quantity:item.quantity+1} : item)
}


console.log("========Products============")
products.map(product=> console.log(product))

addToCart(products[0])
addToCart(products[2])

console.log("======== My Cart ===============")
cart.map(item => console.log(item))


let orderValue = cart.reduce((sum,item)=> sum+item.price*item.quantity,0)
console.log("Order Value:",orderValue)

console.log("Incrementing the quantity of Product 1")
increment(1)

console.log("======== My Cart ===============")
cart.map(item => console.log(item))


orderValue = cart.reduce((sum,item)=> sum+item.price*item.quantity,0)
console.log("Order Value:",orderValue)


console.log("Incrementing the quantity of Product 1")
increment(1)

console.log("======== My Cart ===============")
cart.map(item => console.log(item))

orderValue = cart.reduce((sum,item)=> sum+item.price*item.quantity,0)
console.log("Order Value:",orderValue)