const Manager = require('../lib/Manager.js');

describe("Manager Class", () => {
    describe("Initialization", () => {
        it("Returns an object with the appropriate properties when called with the 'new' keyword", () => {
            const manager = new Manager();

            expect('name' in manager).toEqual(true);
            expect('id' in manager).toEqual(true);
            expect('email' in manager).toEqual(true);
            expect('officeNumber' in manager).toEqual(true);
        })
        it("Sets the value of the properties when created", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const officeNumber = 304;

            const manager = new Manager(name, id, email, officeNumber);

            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.officeNumber).toEqual(officeNumber);
        })
    })
    describe("Methods", () => {
        it("Returns the name value when getName() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const officeNumber = 304;

            const manager = new Manager(name, id, email, officeNumber);

            const managerName = manager.getName();

            expect(managerName).toEqual(name);
        })
        it("Returns the id value when getId() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const officeNumber = 304;

            const manager = new Manager(name, id, email, officeNumber);

            const managerId = manager.getId();

            expect(managerId).toEqual(id);
        })
        it("Returns the email value when getEmail() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const officeNumber = 304;

            const manager = new Manager(name, id, email, officeNumber);

            const managerEmail = manager.getEmail();

            expect(managerEmail).toEqual(email);
        })
        it("Returns the officeNumber value when getOfficeNumber() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const officeNumber = 304;

            const manager = new Manager(name, id, email, officeNumber);

            const managerOfficeNumber = manager.getOfficeNumber();

            expect(managerOfficeNumber).toEqual(officeNumber);
        })
        it("Returns 'Manager' when getRole() is called", () => {
            const manager = new Manager();

            const managerRole = manager.getRole();

            expect(managerRole).toEqual('Manager');
        })
    })
})