function generateHTML(data) {
    return `        
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <h1>My Team</h1>
        <main>
        ${this.managerQuestions}
        ${this.engineerQuestions}
        ${this.internQuestions}
        </main>
    </body>
    </html>`
}