$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
});

$(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
})

var questions = [{
    question: "Who played Rachel Green in Friends?",
    answers: ["Jennifer Lawrence", "Jennifer Aniston", "Jennifer Garner", "Jennifer Love Hewitt"],
    correctAnswer: "Jennifer Aniston",
    image: "assets/images/jenniferaniston.jpg"
}, {
    question: "Who is the current manager of Chelsea FC?",
    answers: ["Antonio Conte", "Jose Mourhino", "Maurizio Sarri", "Carlo Ancelotti"],
    correctAnswer: "Maurizio Sarri",
    image: "assets/images/mauriziosarri.jpg"
}, {
    question: "Sandra Bullock won the Academy Award for Best Actress for her role in which 2009 movie?",
    answers: ["The Blind Side", "Gravity", "The Proposal", "All About Steve"],
    correctAnswer: "The Blind Side",
    image: "assets/images/theblindside.jpg"
}, {
    question: "How many US states border The Gulf of Mexico?",
    answers: ["seven", "five", "six", "four"],
    correctAnswer: "five",
    image: "assets/images/gulfofmexico.jpg"
}, {
    question: "In Quentin Tarantino's hit film, Reservoir Dogs, what were the colours used in place of names?",
    answers: ["Mr. Blue, Mr. Black, Mr. Green, Mr. Orange, Mr. Pink, Mr. White ", "Mr. Blonde, Mr. Blue, Mr. Yellow, Mr. Orange, Mr. Pink, Mr. White ", "Mr. Green, Mr. Blue, Mr. Brown, Mr. Orange, Mr. Pink, Mr. White ", "Mr. Blonde, Mr. Blue, Mr. Brown, Mr. Orange, Mr. Pink, Mr. White "],
    correctAnswer: "Mr. Blonde, Mr. Blue, Mr. Brown, Mr. Orange, Mr. Pink, Mr. White ",
    image: "assets/images/reservoirdogs.jpg"
}, {
    question: "In the 1994 movie, The Lion King, who narrated the voice of Mufasa, Simba's father?",
    answers: ["Samuel L. Jackson", "Morgan Freeman", "James Earl Jones", "Donald Glover"],
    correctAnswer: "James Earl Jones",
    image: "assets/images/mufasa.jpg"
}, {
    question: "For which film did Robert de Niro win his first Oscar?",
    answers: ["The Godfather", "Casino", "A Bronx Tale", "The Godfather II"],
    correctAnswer: "The GodFather II",
    image: "assets/images/mufasa.jpg"
}, {
    question: "Which sport is Michael Jordan best know for?",
    answers: ["Baseball", "Golf", "Basketball", "Tennis"],
    correctAnswer: "Basketball",
    image: "assets/images/mj.jpg"
}];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    countdown: function() {
        game.counter --;
        $('#counter').html(game.counter);
        if(game.counter <= 0) {
            console.log("Time Up!");
            game.timeUp();
        }
    },
    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html('<h2>' + questions[game.currentQuestion].question + '</h2>')
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append('<button class = "answer-button" id = "button-'+i+' "data-name = "'+ questions[game.currentQuestion].answers[i] + '"> '+ questions[game.currentQuestion].answers[i] +'</button>');
        }
    },
    nextQuestion: function() {
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion ++;
        game.loadQuestion();
    },
    timeUp: function() {

    },
    results: function() {

    },
    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }

    },
    answeredCorrectly: function() {
        console.log("You got it right!");

    },
    answeredIncorrectly: function() {
        console.log("You got it wrong!");

    },
    reset: function() {

    }
}