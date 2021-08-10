const Intern = require('../lib/Intern.js');

describe("Intern Class", () => {
    describe("Initialization", () => {
        it("Returns an object with the appropriate properties when called with the 'new' keyword", () => {
            const intern = new Intern();

            expect('name' in intern).toEqual(true);
            expect('id' in intern).toEqual(true);
            expect('email' in intern).toEqual(true);
            expect('school' in intern).toEqual(true);
        })
        it("Sets the value of the properties when created", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const school = "riley.lum";

            const intern = new Intern(name, id, email, school);

            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.school).toEqual(school);
        })
    })
    describe("Methods", () => {
        it("Returns the name value when getName() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const school = "riley.lum";

            const intern = new Intern(name, id, email, school);

            const internName = intern.getName();

            expect(internName).toEqual(name);
        })
        it("Returns the id value when getId() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const school = "riley.lum";

            const intern = new Intern(name, id, email, school);

            const internId = intern.getId();

            expect(internId).toEqual(id);
        })
        it("Returns the email value when getEmail() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const school = "riley.lum";

            const intern = new Intern(name, id, email, school);

            const internEmail = intern.getEmail();

            expect(internEmail).toEqual(email);
        })
        it("Returns the school value when getSchool() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const school = "riley.lum";

            const intern = new Intern(name, id, email, school);

            const internSchool = intern.getSchool();

            expect(internSchool).toEqual(school);
        })
        it("Returns 'Intern' when getRole() is called", () => {
            const intern = new Intern();

            const internRole = intern.getRole();

            expect(internRole).toEqual('Intern');
        })
    })
})