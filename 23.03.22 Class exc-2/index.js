class Employee {
    constructor(id,firstName,lastName,taxId,salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.taxId = taxId;
        this.salary = salary;
    }
    generatePaySlip() {
        let monthlySalary = (this.salary / 12).toFixed(2);
        return `Employee ID: ${this.id}\nName: ${this.firstName} ${this.lastName}\nTax ID: ${this.taxId}\nPay: ${monthlySalary}€`
    }
}

class Manager extends Employee {
    constructor(id,firstName,lastName,taxId,salary) {
       super(id,firstName,lastName,taxId,salary);
       this.managedEmployees = []
    }
    addManagedEmployee(mngr) {
        if(mngr instanceof Employee) {
            this.managedEmployees.push(mngr.firstName);
        } else {
            console.log("You are'n our employee")
        }
    }
    removeManagedEmployee(manage) {
        const indexNo = this.managedEmployees.indexOf(manage);
        this.managedEmployees.splice(indexNo,1);
    }
}

const employee1 = new Employee(101,"Lionel","Messi",7896,100000);
const employee2 = new Employee(110,"Christiano","Ronaldo",2828,90000);
const employee3 = new Employee(120,"Kharim","Benzama",2525,70000);
const employee4 = new Employee(512,"Eden","Haaland",8745,150000);

// const manager1 = new Manager(513,"Manuel","Neuer",6741,180000);

console.log(employee1.generatePaySlip());
console.log(employee2.generatePaySlip());
console.log(employee3.generatePaySlip());
console.log(employee4.generatePaySlip());
// console.log(manager1.generatePaySlip());

const managers = new Manager ();

managers.addManagedEmployee(employee1)
managers.addManagedEmployee(employee2)
managers.addManagedEmployee(employee4)
console.log(managers.managedEmployees); // [ 'Lionel Messi', 'Eden Haaland' ]

managers.removeManagedEmployee(employee1)
console.log(managers.managedEmployees)
