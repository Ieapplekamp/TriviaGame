// https://www.usefultrivia.com/music_trivia/index_iii.html

$(document).ready(function() {

    $('#restart').hide();

    // possible questions object
    var questionsAnswers = [
        
        { //
            question: "Which Johnny Cash song did an advertising company want to use for a hemorrhoids ad?",
            choices: ["Cry Cry Cry", "Hurt", "Ring Of Fire", "All I Do Is Drive"],
            answer: 'Ring Of Fire'
        },
        { //
            question: "What was the band known as Linkin Park originally called?",
            choices: ["Reanimators", "Meteora", "Hybrid Theory", "Xero"],
            answer: 'Xero'
        },
        { //
            question: "What was the name of the airplane Buddy Holly died in?",
            choices: ["So Long", "American Pie", "Peggy Sue", "Rave On"],
            answer: 'American Pie'
        },
        { //
            question: "What was Bob Marley's song 'I Shot the Sheriff' really about?",
            choices: ["His Record Label", "The Media", "Birth Control", "Irish Republican Army"],
            answer: 'Birth Control'
        },
        { //
            question: "How many different instruments did Prince play on his debut album?",
            choices: ["16", "9", "3", "27"],
            answer: '27'
        },
        { //
            question: "What band did Prince form in 1981?",
            choices: ["The Revolution", "The Bangles", "3rdeyegirl", "The Time"],
            answer: 'The Time'
        },
        { // 
            question: "What band was originally named Tony Flow and the Miraculously Majestic Masters of Mayhem?",
            choices: ["Pear Jam", "Red Hot Chili Peppers", "Pierce The Veil", "G-Unit"],
            answer: 'Red Hot Chili Peppers'
        },
        { 
            question: "Which of these is not a Frank Ocean song?",
            choices: ["Nikes", "Pink Matter", "Pyramids", "1. The Worst Guys"],
            answer: '1. The Worst Guys'
        },
        { 
            question: "Who bumped Michael Jackson off the #1 spot in January 1992?",
            choices: ["Madonna", "Nirvana", "Mariah Carey", "Guns N' Roses"],
            answer: 'Nirvana'
        },
        { 
            question: "What day 2pac die?",
            choices: ["September 13th, 1996", "September 13th, 1995", "August 29th, 1996", "July 14th, 1996"],
            answer: 'September 13th, 1996'
        },
        {
            question: "Who sings Baby Boy?",
            choices: ["Beyoncé", "Ciara", "Mariah Carey", "Destiny's Child"],
            answer: 'Beyoncé'
        }
    ];


    // Globes
    var wins = 0;
    var losses = 0;
    var incorrectGuesses = [];
    var initialQuestion = 0;     
    var questionAmount = 10;
    
    var interval;
    var intervalTwo;

    var clockRunning = false;
    var timer = 120;
    var timerTwo = 0;
    
      
    // On click event startTimer === start game
    $('#start').on("click", startTimer);
    // on click event that restarts the game
    $('#restart').on("click", restart);

    // Circles through the incorrectGuesses array and slaps them on the page
    function loop() {

        for (var i = 0; i < incorrectGuesses.length; i++) {

            var test = $('<li>');
            test.attr('data-info', incorrectGuesses[i]);
            test.text(incorrectGuesses[i]);
            $('#incorrectGuesses').append(test);
            
        }
    }


    function restart() {
        
        clearInterval(interval);
        clearInterval(intervalTwo);
        
        clockRunning = false;
        timer = 120;
        timerTwo = 0;
        initialQuestion = 0;
        wins = 0;
        losses = 0;
        incorrectGuesses = [];

        $('#incorrectGuesses').empty();
        $('#correct').hide();
        $('#incorrect').hide();
        
        $("#theQuestions").show();
        $('#buttons').show();
        
        startTimer();
        starterQuestion();
        $(".multipleChoices").slice(4).hide();
    
    }

    // --------------------- Start Game + Watch -------------------- \\
    
    function startTimer() {
  
        if (!clockRunning) {
            interval = setInterval(mainTimer, 1000);
            intervalTwo = setInterval(shortTimer, 1000);
            
            clockRunning = true;
            $('#start').hide();
            $('#restart').hide();
            
        } 
        
        starterQuestion();
        
    }

    // Either hides or shows the results depending if the game is over
    function hideAndSeek() {

        $('#buttons').hide();
        $('#theQuestions').hide();
        
        $('#restart').show(); 
        $('#correct').show();
        $('#incorrect').show();

        $('#correct').html("Correct: " + wins);
        $('#incorrect').html("Incorrect: " + losses);
        var winsAndLosses = wins + losses;
        $('#unanswered').html((winsAndLosses) + "/11 Completed");
        loop();
        
    }
    
    // Timer 1
    function mainTimer() {
        
        var converter = timeConverter(timer--);
        $('#timer').text(converter);
  
        if (timer === 0) {
            alert("Times Up");
            
            clearInterval(interval);
            clearInterval(intervalTwo);
            
            hideAndSeek();
    
        }
    }
    //Timer 2
    function shortTimer() {
       
        var converter = timeConverter(timerTwo++);
        $('#recommendedTimer').text(converter);
        
        if (timerTwo === 11) {
            losses++;
            
            timerTwo = 0;
            incorrectGuesses.push(questionsAnswers[initialQuestion].question);
            initialQuestion++;
            starterQuestion();
            console.log(incorrectGuesses);
            $(".multipleChoices").slice(4).hide();
            
        } else if (initialQuestion === questionAmount) {
            clearInterval(intervalTwo);
            
        }
    }
    
    function timeConverter(e) {
  
        var minutes = Math.floor(e / 60);
        var seconds = e - (minutes * 60);
        
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "0";
        }
        
        return minutes + " : " + seconds;
    }
  
  // --------------------- stop watch ends -------------------- \\

    function starterQuestion() {    // This is the main block of code and holds buttons

        var questions = questionsAnswers[initialQuestion].question;
        var choices = questionsAnswers[initialQuestion].choices;
        var correctAnswer = questionsAnswers[initialQuestion].answer;
        
        $("#theQuestions").html(questions);
        $('#unanswered').html(wins + losses + "/11 Completed");

        for (var i = 0; i < choices.length; i++) {

            var result = $("<button>");
            result.addClass("multipleChoices");
            result.addClass('btn btn-warning float-center');
            result.attr("data-choices", choices[i]);
            result.text(choices[i]);
        
            $("#buttons").prepend(result);
            
        }

        // Buttons function and main block of code that validates guesses
        $('.multipleChoices').on('click', function () {
            
            var value = $(this).attr("data-choices");
 
            if (initialQuestion === questionAmount) {
                
                clearInterval(interval);
                clearInterval(intervalTwo);

                if (correctAnswer === value) {
                    wins++;
                } else {
                    if (correctAnswer !== value) {
                        losses++;
                    }
                }
                
                hideAndSeek();
                // var winsAndLosses = wins + losses;  -- with the initial run it will say 12/11 completed and this will get ride of my console error and then refer to the error around 222 again
                $('#unanswered').html((winsAndLosses - 1) + "/11 Completed"); // This gives an error in the console and then refers to line 222, but everything works and works correctly with this variable 

            } if (correctAnswer === value) {
                wins++;
                initialQuestion++;
                timerTwo = 0;

                $('#unanswered').html(wins + losses + "/11 Completed");
                
            } else if (correctAnswer !== value) {
                losses++;
                
                timerTwo = 0;
                incorrectGuesses.push(questionsAnswers[initialQuestion].question);
                initialQuestion++;
                console.log(incorrectGuesses);
                $('#unanswered').html(wins + losses + "/11 Completed");
    
            } 
            
            starterQuestion();
            $(".multipleChoices").slice(4).hide();
    
        })
        
    }

})