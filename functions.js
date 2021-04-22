let highscore = [
    {name:"Bruno", score:"4"}
]
let score = 0


function startQuiz() {
    setTimeout(endquiz(), 30000);
    window.location.href = "quiz.html";
}

function endquiz() {
    var person = prompt("Please enter your name", "Name");
    highscore.push({name:person, score:score});
    window.location.href = "index.html";
    window.localStorage.setItem("highscores", JSON.stringify(highscore))
}

function correct() {
    score++;
    console.log(score);
}

function correctLast() {
    score++;
    endquiz();
}

function wrongLast() {
    endquiz();
}

function displayscores() {
    var highscores = JSON.parse(localStorage.getItem("highscores"))
    var html = "<table border='1|1'>";
    for (var i = 0; i < highscores.length; i++) {
        html+="<tr>";
            html+="<td>"+highscores[i].name+"</td>";
            html+="<td>"+highscores[i].score+"</td>";
        html+="</tr>";
    
    }
    html+="</table>";
    document.getElementById("datalocation").innerHTML = html;
    console.log(highscore);
}
