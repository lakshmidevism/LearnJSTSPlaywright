class ICICI {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    
getBalance(){
   return this.#balance;
}

setBalance(balance,cashier){
    if(cashier){
        this.#balance = balance;
    } else {
        console.log("You are not authorized to set balance");
    }
}
}

let icici1 = new ICICI(1000);
console.log(icici1.getBalance()); 
console.log(icici1.setBalance(1500, true)); // Output: 1500
console.log(icici1.setBalance(2000, false)); // Output: You are not authorized to set balance
