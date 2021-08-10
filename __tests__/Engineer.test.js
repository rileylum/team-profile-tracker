const Engineer = require('../lib/Engineer.js');

describe("Engineer Class", () => {
    describe("Initialization", () => {
        it("Returns an object with the appropriate properties when called with the 'new' keyword", () => {
            const engineer = new Engineer();

            expect('name' in engineer).toEqual(true);
            expect('id' in engineer).toEqual(true);
            expect('email' in engineer).toEqual(true);
            expect('github' in engineer).toEqual(true);
        })
        it("Sets the value of the properties when created", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const github = "riley.lum";

            const engineer = new Engineer(name, id, email, github);

            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        })
    })
    describe("Methods", () => {
        it("Returns the name value when getName() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const github = "riley.lum";

            const engineer = new Engineer(name, id, email, github);

            const engineerName = engineer.getName();

            expect(engineerName).toEqual(name);
        })
        it("Returns the id value when getId() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const github = "riley.lum";

            const engineer = new Engineer(name, id, email, github);

            const engineerId = engineer.getId();

            expect(engineerId).toEqual(id);
        })
        it("Returns the email value when getEmail() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const github = "riley.lum";

            const engineer = new Engineer(name, id, email, github);

            const engineerEmail = engineer.getEmail();

            expect(engineerEmail).toEqual(email);
        })
        it("Returns the github value when getGithub() is called", () => {
            const name = "Riley";
            const id = 1;
            const email = "rileylum@adam.com.au";
            const github = "riley.lum";

            const engineer = new Engineer(name, id, email, github);

            const engineerGithub = engineer.getGithub();

            expect(engineerGithub).toEqual(github);
        })
        it("Returns 'Engineer' when getRole() is called", () => {
            const engineer = new Engineer();

            const engineerRole = engineer.getRole();

            expect(engineerRole).toEqual('Engineer');
        })
    })
})