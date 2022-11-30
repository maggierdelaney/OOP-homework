function generateEngineerCard(engineer) {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-header">Engineer: ${engineer.name}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item"><a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item"><a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
</div>`
}

function generateInternCard(intern) {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-header">Intern: ${intern.name}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item"><a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">${intern.school}</li>
    </ul>
</div>`
}

function generateHTML(employeeArray) {
    let cards = ""
    for (i = 1; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() === 'Intern') {
            cards = cards + generateInternCard(employeeArray[i])
        }
        if (employeeArray[i].getRole() === 'Engineer') {
            cards = cards + generateEngineerCard(employeeArray[i])
        }
    }
    return `        
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./dist/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="jumbotron">
            <h1 class="display-4">My Team</h1>
        </header>
        <main>
        <div class="card" style="width: 18rem;">
            <div class="card-header">Manager: ${employeeArray[0].name}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeArray[0].id}</li>
                    <li class="list-group-item"><a href="mailto:${employeeArray[0].email}">${employeeArray[0].email}</a></li>
                    <li class="list-group-item">${employeeArray[0].office}</li>
            </ul>
        </div>
        ${cards}
        </main>
    </body>
    </html>`
};

module.exports = generateHTML; 