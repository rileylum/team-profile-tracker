const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function generateHTML(team) {
    let teamMembersHTML = "";
    team.forEach(member => {
        console.log(member);
        let memeberHTML = "";
        if (member instanceof Manager) {
            memeberHTML = managerHTML(member);
        } else if (member instanceof Engineer) {
            memeberHTML = engineerHTML(member);
        } else if (member instanceof Intern) {
            memeberHTML = internHTML(member);
        } else {
            console.error("Unexpected Employee Type");
        }
        teamMembersHTML += memeberHTML;
    })

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>

<body>

    <header class="container-fluid bg-primary p-3">
        <h1 class="text-white text-center">My Team</h1>
    </header>

    <main>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-around text-center">
                ${teamMembersHTML}
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
        crossorigin="anonymous"></script>
</body>

</html>
`;
}

function managerHTML(member) {
    return `
    <div class="card m-3 p-0 bg-light border border-secondary" style="width: 18rem;">
        <div class="card-body bg-success text-white">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">Manager</p>
        </div>
            <ul class="list-group list-group-flush m-3 border border-secondary">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.email}>${member.email}</a></li>
                <li class="list-group-item">Office Number: ${member.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
}

function engineerHTML(member) {
    return `
    <div class="card m-3 p-0 bg-light border border-secondary" style="width: 18rem;">
        <div class="card-body bg-success text-white">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">Engineer</p>
        </div>
            <ul class="list-group list-group-flush m-3 border border-secondary">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.email}>${member.email}</a></li>
                <li class="list-group-item">GitHub: <a href="${member.github}" target="_blank">${member.github}</a></li>
            </ul>
        </div>
    </div>
    `
}

function internHTML(member) {
    return `
    <div class="card m-3 p-0 bg-light border border-secondary" style="width: 18rem;">
        <div class="card-body bg-success text-white">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">Intern</p>
        </div>
            <ul class="list-group list-group-flush m-3 border border-secondary">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.email}>${member.email}</a></li>
                <li class="list-group-item">School: ${member.school}</li>
            </ul>
        </div>
    </div>
    `
}

module.exports = generateHTML;