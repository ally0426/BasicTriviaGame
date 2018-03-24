$("#start").on("click", function () {
    game.start();
});

$(document).on("click", "#end", function() {
    game.done();
})

var questions = [{
    question: "A cat has how many whiskers, on average?",
    answers: ["8", "12", "16", "24"],
    CorrectAnswer: "24"
},
{
    question: "Do cats have fewer teeth than dogs have or more?",
    answers: ["Fewer", "double", "Triple", "Same"],
    correctAnswer: "Fewer"
},
{
    question: "All of the following are the names of cat breeds, except:",
    answers: ["Balinese", "Beauceron", "Birman", "Burmilla"],
    correctAnswer: "Beauceron"
},
{
    question: "The thick hair around the face of some cats (such as Persians) is called:",
    answers: ["Shock", "Pelt", "Ruff", "Mane"],
    correctAnswer: "Ruff"
},
{
    question: "Cats can’t taste this:",
    answers: ["Sour", "Sweet", "Salty", "Bitter"],
    correctAnswer: "Sweet"
},
{
    question: "What’s the total number of claws that most house cats have?",
    answers: ["A twitching tail means I’m getting irritated.", "A tail tucked underneath the body means I’m hungry.", "A cat’s tail held high means I’m happy.", "A thumping tail means I’m totally frustrated!"],
    correctAnswer: "A tail tucked underneath the body means I’m hungry."
},
{
    question: "What’s it called when a cat rubs the side of her head on you or on furniture?",
    answers: ["Beaning", "Tagging", "Bunting", "Brocking"],
    correctAnswer: "Bunting"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>20</span> Seconds</h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2><br>");
            for (var j = 0; j < questions[1].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
            $("#subwrapper").append("<br>");
        }
        $("#subwrapper").append("<br><button id='end'>Done</button>");
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    result: function() {
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>All Done!</h2><br>");
        $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3><br>");
        $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3><br>");
        $("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.correct + this.incorrect)) + "</h3>");
        
    }
}