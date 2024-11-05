"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = []; //can be used in classes extended
        this.name = name;
        this.id = id;
        //console.log(Department.fiscalYear); accessing a static element
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// private name: String;
//private id: String
//readonly modifier == you can not change it's properties adding type safety.
//protected this is available for classes that are extended.
// private employees: string[] = []; won't be used in an extended class
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        // getter function most return something
        if (this.lastReports) {
            return this.lastReports;
        }
        throw new Error();
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('please pass in a valid value!');
        }
        this.addReports(value);
    }
    constructor(id, reports) {
        super(id, 'Account');
        this.reports = reports;
        this.lastReports = this.reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instace) {
            return this.instace;
        }
        this.instace = new AccountingDepartment('d2', []);
        return this.instace;
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReports = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employeeq1 = Department.createEmployee('Max');
console.log(employeeq1, Department.fiscalYear);
const it = new ITDepartment('id', []);
it.addEmployee('Max');
it.addEmployee('Alex');
//it.employees[2] = 'Martins'; //won't work employee is protected
it.describe();
it.printEmployeesInformation();
console.log(it);
//const accounting = new AccountingDepartment('id', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.describe();
accounting.mostRecentReport = 'Year End Report';
accounting.addReports('something went wrong...');
console.log(accounting.mostRecentReport);
accounting.printReports();
const accountingCopy = { name: 'Dummy', describe: accounting.describe };
//accountingCopy.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Menu');
accounting.printEmployeesInformation();
//======================
// Note : getters and setters should be executed as a property not as a method
