class bankAccount {
    #balance=0

    deposit(Amount){
        this.#balance+=Amount
        return this.#balance
    }

    getbalance(){
        return `$${this.#balance}`
    }
}

let account123 = new bankAccount()
console.log(account123.getbalance())