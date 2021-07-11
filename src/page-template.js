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
                <h2 class="card-title">Employee Name ${answer.managerName}</h2>
                <h3 class="card-text"><i class="fas fa-mug-hot"></i>  Manager </h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${answer.managerEmployeeID}</li>
                    <li class="list-group-item">Email: ${answer.managerEmail}</li>
                    <li class="list-group-item">Office number: ${answer.managerOfficeNumber}</li>
                </ul>
            </div>
        </div>\n `

const createEngineerCardHTML = (answer) =>       
        `<!-- Engineer Card-->
        <div class="card engineer-card" style="width: 18rem;">
        <div class="card-header">
            <h2 class="card-title">${answer.engineerName}</h2>
            <h3 class="card-text"><i class="fas fa-glasses"></i>  Engineer </h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${answer.engineerEmployeeID}</li>
                <li class="list-group-item">Email: ${answer.engineerEmail}</li>
                <li class="list-group-item">GitHub Username: ${answer.gitHubUsername}</li>
            </ul>
        </div>\n`



// export to use in index.js
module.exports = {
    checkConnected,
    createInitialHTML,
    createEngineerCardHTML,
  };
  