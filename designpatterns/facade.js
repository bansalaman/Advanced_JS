class Bank{
    verify(name,amount){
        return true;
    }
}

class CreditStore{
    get(name){
        return true;
    }
}

class Background{
    check(name){
        return true;
    }
}

class PersonalLoan{
    constructor(name){
        this.name = name;
    }
    applyFor(amount){
        let result = "approved";
        if(!new Bank().verify(this.name,amount)){
            result = "denied";
        }
        else if(!new CreditStore().get(this.naem)){
            result = "denied";
        }
        else if(!new Background().check(this.name)){
            result = "denied"
        }
        return result;
    }
}

let loan = new PersonalLoan('Aman');
console.log(loan.applyFor(750000.00));