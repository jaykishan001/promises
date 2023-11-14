const cart = ["kurta", "pajama", "shirt", "pant"];

createOrder(cart)
.then(function(orderId){
    
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return orderHistory(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
});

function createOrder(cart) {
     
    return new Promise (function (resolve, reject){

        if(!validCart(cart)){
           const err = new Error("Cart is not valid")
           reject(err);
        }

        let orderId = 100012;

        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },4000)
        }
    })
}

function proceedToPayment(orderId) {
    return new Promise (function(resolve,reject){
        resolve("Order placed succesfully")
    }) 

}

function orderHistory(paymentInfo){
    return new Promise (function(resolve, reject){
        resolve("oder history done")
        console.log(resolve)
    })
}

function  validCart(){
    return false;
}

