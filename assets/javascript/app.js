// https://www.usefultrivia.com/music_trivia/index_iii.html

$(document).ready(function() {

    $('#restart').hide();
    // possible questions
    var questionsAnswers = [
        
        { //
            question: "Which Johnny Cash song did an advertising company want to use for a hemorrhoids ad?",
            choices: ["Cry Cry Cry", "Hurt", "Ring Of Fire", "All I DO Is Drive"],
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
            question: "Who sings Baby Boy",
            choices: ["Beyoncé", "Ciara", "Mariah Carey", "Destiny's Child"],
            answer: 'Beyoncé'
        }
    ];


    var wins = 0;
    var losses = 0;

    var initialQuestion = 0;     
    var questionAmount = 10;
    
    // --------------------- stop watch begins -------------------- \\
    
    var interval;
    var intervalTwo;

    var clockRunning = false;
    var timer = 120;
    var timerTwo = 0;
      
    // On click event that starts the game
    $('#start').on("click", startTimer);
    $('#restart').on("click", restart);
    // on click event that restarts the game
    function restart() {
        
        clearInterval(interval);
        clearInterval(intervalTwo);
        initialQuestion = 0;
        timer = 120;
        clockRunning = false;
        timerTwo = 0;
        initialQuestion = 0;
        wins = 0;
        losses = 0;

        $('#correct').hide();
        $('#incorrect').hide();
        // $('#unanswered').hide();
        
        $("#theQuestions").show();
        $('#buttons').show();
        
        startTimer();
        starterQuestion();
        $("button").slice(4).hide();
    
    }
      
    
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

    function hideAndSeek() {
        $('#buttons').hide();
        $('#theQuestions').hide();

        $('#restart').show(); 
        $('#correct').show();
        $('#incorrect').show();
        // $('#unanswered').show();

        $('#correct').html("Correct: " + wins);
        $('#incorrect').html("Incorrect: " + losses);
        var winsAndLosses = wins + losses
        console.log(questionAmount);
        $('#unanswered').html((winsAndLosses) + "/11 Completed");
    }
  
    
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
    // maybe add a box that holds time stamps after completing a game
    function shortTimer() {
       
        var converter = timeConverter(timerTwo++);
        $('#recommendedTimer').text(converter);
        
        if (timerTwo === 16) {
            losses++;
            initialQuestion++;
            timerTwo = 0;
            
            starterQuestion();
            $("button").slice(4).hide();
            
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
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        
        return minutes + " : " + seconds;
    }
  
  // --------------------- stop watch ends -------------------- \\

    function starterQuestion() {

        var questions = questionsAnswers[initialQuestion].question;
        var choices = questionsAnswers[initialQuestion].choices;
        var correctAnswer = questionsAnswers[initialQuestion].answer;
        
        
        $("#theQuestions").html(questions + '<br>');
        
        $('#unanswered').html(wins + losses + "/11 Completed");

        for (var i = 0; i < choices.length; i++) {

            var result = $("<button>");
            result.addClass("multipleChoices");
            result.attr("data-choices", choices[i]);
            result.text(choices[i]);
        
            $("#buttons").prepend(result);
            //console.log(result);
        }

        $('.multipleChoices').on('click', function() {
            var value = $(this).attr("data-choices");
            //console.log(value);

            // This is pretty much the results condition
            
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
                //initialQuestion = 0;
                
                hideAndSeek();
                $('#unanswered').html((winsAndLosses - 1) + "/11 Completed");

            } if (correctAnswer === value) {
                wins++;
                console.log(wins);
                initialQuestion++;
                timerTwo = 0;
                $('#unanswered').html(wins + losses + "/11 Completed");
                //console.log('Wins ' + wins);

            } else if (correctAnswer !== value) {
                losses++;
                console.log(losses);
                initialQuestion++;
                timerTwo = 0;
                $('#unanswered').html(wins + losses + "/11 Completed");
                //console.log('Losses ' + losses);

            } 
            
            starterQuestion();
            // im a genius 
            $("button").slice(4).hide();
    
        })
        
    }
    
})