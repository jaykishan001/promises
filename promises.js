// const GITHUB_API = "https://api.github.com/users/akshaymarch7"

// const user = fetch(GITHUB_API);

// console.log(user );

// user.then(function(data) {

//     const trust = data.json();
//     console.log(trust);
// })

createOrder(cart)
 .then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo => updateWalletBalance(paymentInfo));