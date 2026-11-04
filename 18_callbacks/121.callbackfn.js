function placeOrder(item, callback){
    console.log("Placing an order");
    console.log("Order Placed", item);
    callback();
}


 // First Way
 function CompleteOrderPrint(){
     console.log("Normal Fn");
}

placeOrder("Burger", CompleteOrderPrint);

// Sencond Way anonymous Function
 placeOrder("Burger", function(){
    console.log("Order is ready!, pick it up!");
 });


// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

//playwright example
test('has title', async ({ page }) => {

});
