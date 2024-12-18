function calculateScore() {
    // Les réponses correctes
    var answers = {
        q1: "JavaScript",
        q2: "Exécuter des instructions",
        q3: "JavaScript",
        q4: "Liste",
        q5: "<img>",
        q6: ".py",
        q7: "Un espace mémoire pour stocker une valeur",
        q8: "console.log()",
        q9: "Central Processing Unit",
        q10: "float"
    };

    var score = 0; // Initialiser le score

    // Récupérer le formulaire
    var form = document.quizForm;
    // Parcourir toutes les réponses correctes
    for (var question in answers) {
        var userAnswer = form[question].value; // Récupérer la réponse sélectionnée
        if (userAnswer === answers[question]) {
            score++; // Incrémenter le score si la réponse est correcte
        }
    }

    // Afficher le score dans l'élément avec l'ID "result"
    document.getElementById("result").innerText = `Votre score est : ${score} / 10`;

}
