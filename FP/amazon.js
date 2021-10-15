//Requirement
// const user = {
//     name:'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// }
// 1. Add item to cart
// 2. Add 3% tax to item in cart
// 3. Buy Item Cart -> purchases
// 4. Empty Cart

// const item = {
//     name:"Bottel",
//     price:340,
// }


const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
}

let res = buy(user,{name:'Himanshu','price':223})
console.log("Res == ",res);

function purchaseItem(...fns){
    return fns.reduse(compose)
} 
function addItem(user) {
       const updateCart = user.cart.concat(item);
       return Object.assign({},user,{cart:updateCart})
}
function buy(user) {
    return Object.assign({},user,{purchases:user.cart})
    
}

function applyDiscount(user,item) {
    const {cart} = user
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name:item.name,
            price:item.price * taxRate,
        }
    })
    return Object.assign({},user,{cart:updatedCart})
}

