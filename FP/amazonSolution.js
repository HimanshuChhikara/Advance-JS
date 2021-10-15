const user = {
    name:'Kim',
    active:true,
    cart:[],
    purchase:[]
}

const compose = (f,g) => (...args) => f(g(...args));
const res = purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart,
)(user,{name:'Laptop',price:'200'})

console.log(res)
function purchaseItem(...fns) {
    return fns.reduce(compose);
} 
    

function addItemToCart(user,item) {
    const updatedCart = user.cart.concat(item)
    return Object.assign({},user,{cart:updatedCart});
}

function applyTaxToItems() {
    return user
}

function buyItem() {
    return user
}

function emptyCart() {
    return user
}