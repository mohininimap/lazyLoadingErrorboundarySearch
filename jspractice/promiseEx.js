const cart=["shoes","pants","kurta"];
//it is responsiibility to create a order api to create order first and then callback function once the order created 
//with the orderId

createOrder(cart,function(orderId){
    proceedToPayment(orderId)
}
);


