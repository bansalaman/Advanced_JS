class Employee{
    constructor(hourly){
        this.hourly = hourly;
    }
}

class ParttimeEmployee extends Employee{
    constructor(hourly){
        super(hourly);
    }
}

class FulltimeEmployee extends Employee{
    constructor(hourly){
        super(hourly);
    }
}

class TemporaryEmployee extends Employee{
    constructor(hourly){
        super(hourly);
    }
}

class EmployeeFactory{
    static createEmployee(type){
        switch(type){
            case "part":
            return new ParttimeEmployee(500);
            break;

            case "full":
            return new FulltimeEmployee(200);
            break;

            case "temp":
            return new TemporaryEmployee(400);
            break;

            default:
            return new Employee(300);
            break;
        }
    }
}

let inst = EmployeeFactory.createEmployee('full');
console.log(inst.hourly);