let highscore = [
    {name:"Bruno", score:"4"}
]
let sortedscores = highscore.sort(score);
let score = 0


startQuiz() {
    setTimeout(endquiz(), 30000);
}

endquiz() {
    window.location.assign("/index.html");
    export endquiz();
}

correct() {
    score + 1;
    console.log(score);
    export correct();
}

correctLast() {
    score + 1;
    var person = prompt("Please enter your name", "Name");
    person + score = highscore.push({name:person, score:score});
    endquiz();
}

wrongLast() {
    var person = prompt("Please enter your name", "Name");
    person + score = highscore.push({name:person, score:score});
    endquiz();
}

displayscores() {
    var html = "<table border='1|1'>";
    for (var i = 0; i < highscore.length; i++) {
        html+="<tr>";
            html+="<td>"+highscore[i].name+"</td>";
            html+="<td>"+highscore[i].score+"</td>";
        html+="</tr>";
    
    }
    html+="</table>";
    document.getElementById("datalocation").innerHTML = html;
    console.log(highscore);
}

















