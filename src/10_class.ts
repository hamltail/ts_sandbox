namespace Sandbox10 {
  console.log("----- 10 -----");

  class Department {
    // private readonly id: string;
    // name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }

    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    printEmployeeInformation() {
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
  }

  class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }

    addReport(text: string) {
      this.reports.push(text);
    }

    printReports() {
      console.log(this.reports);
    }

    addEmployee(name: string) {
      if (name === 'Joe') return;

      this.employees.push(name);
    }
  }

  const it = new ITDepartment('d1', ['Joe']);
  console.log(it);
  it.describe();

  it.addEmployee("Obama");
  it.addEmployee("Trump");
  it.addEmployee("Biden");
  it.printEmployeeInformation();

  console.log(it);

  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  // accountingCopy.describe();

  const accounting = new AccountingDepartment('d2', []);
  accounting.addReport('Something');
  accounting.printReports();

  accounting.addEmployee('Joe');
  accounting.addEmployee('Bob');
  accounting.printEmployeeInformation();
}