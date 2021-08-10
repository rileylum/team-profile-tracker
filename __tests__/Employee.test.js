const Employee = require('../lib/Employee.js');

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("Returns an object with the appropriate properties when called with the 'new' keyword", () => {
            const employee = new Employee();

            expect('name' in employee).toEqual(true);
            expect('id' in employee).toEqual(true);
            expect('email' in employee).toEqual(true);
        })
        it("Sets the value of the properties when created", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au"

            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        })
    })
    describe("Methods", () => {
        it("Returns the name value when getName() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au"

            const employee = new Employee(name, id, email);

            const employeeName = employee.getName();

            expect(employeeName).toEqual(name);
        })
        it("Returns the id value when getId() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au"

            const employee = new Employee(name, id, email);

            const employeeId = employee.getId();

            expect(employeeId).toEqual(id);
        })
        it("Returns the email value when getEmail() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au"

            const employee = new Employee(name, id, email);

            const employeeEmail = employee.getEmail();

            expect(employeeEmail).toEqual(email);
        })
    })
})