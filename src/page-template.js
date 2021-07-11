const checkConnected = (res) => console.log("page connected, SUCCESS", res);

const createInitialHTML = (answer) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap stylesheet link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- Font Awesome stylesheet -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <!-- CSS stylesheet link -->
    <link rel="stylesheet" href="style.css">
    <title>Employee Roster</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>
        <!-- Cards for generated employees -->
        <!-- Manager Card-->
        <div class="card manager-card" style="width: 18rem;">
            <div class="card-header">
                <h2 class="card-title">${answer.managerName}</h2>
                <h3 class="card-text"><i class="fas fa-mug-hot"></i>  Manager </h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${answer.managerEmployeeID}</li>
                    <li class="list-group-item">Email: <a href= "mailto: ${answer.managerEmail}">${answer.managerEmail}</a></li>
                    <li class="list-group-item">Office number: ${answer.managerOfficeNumber}</li>
                </ul>
            </div>
        </div>\n `

const createEngineerCardHTML = (answer) =>       
`       <!-- Engineer Card-->
        <div class="card engineer-card" style="width: 18rem;">
        <div class="card-header">
            <h2 class="card-title">${answer.engineerName}</h2>
            <h3 class="card-text"><i class="fas fa-glasses"></i>  Engineer </h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${answer.engineerEmployeeID}</li>
                <li class="list-group-item">Email: <a href="mailto: ${answer.engineerEmail}"> ${answer.engineerEmail}</a></li>
                <li class="list-group-item">GitHub Username: <a href= "https://github.com/${answer.gitHubUsername}">${answer.gitHubUsername}</a></li>
            </ul>
        </div>\n`

const createInternCardHTML = (answers) =>
`       <!-- Intern Card-->
        <div class="card intern-card" style="width: 18rem;">
            <div class="card-header">
                <h2 class="card-title">${answers.internName}</h2>
                <h3 class="card-text"><i class="fas fa-user-graduate"></i>  Intern </h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${answers.internEmployeeID}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${answers.internEmail}">${answers.internEmail}</a></li>
                    <li class="list-group-item">School: ${answers.school} </li>
                </ul>
            </div>
        </div>\n`

const createEndHTML = () =>
`   </main>

<!-- Bootstrap script links -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

</body>
</html>`

// export to use in index.js
module.exports = {
    checkConnected,
    createInitialHTML,
    createEngineerCardHTML,
    createInternCardHTML,
    createEndHTML,
  };
  