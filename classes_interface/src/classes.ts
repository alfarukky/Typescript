abstract class Department {
  // private name: String;
  //private id: String
  //readonly modifier == you can not change it's properties adding type safety.
  //protected this is available for classes that are extended.
  // private employees: string[] = []; won't be used in an extended class
  static fiscalYear = 2020;
  protected employees: string[] = []; //can be used in classes extended

  constructor(private name: String, protected readonly id: String) {
    this.name = name;
    this.id = id;
    //console.log(Department.fiscalYear); accessing a static element
  }

  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReports: string;
  private static instace: AccountingDepartment;
  get mostRecentReport() {
    // getter function most return something
    if (this.lastReports) {
      return this.lastReports;
    }
    throw new Error();
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('please pass in a valid value!');
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Account');
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

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
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
