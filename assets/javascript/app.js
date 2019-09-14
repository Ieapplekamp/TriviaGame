// https://www.usefultrivia.com/music_trivia/index_iii.html

$(document).ready(function() {


    // --------------------- stop watch begins -------------------- \\
    
    var interval;
    var intervalTwo;

    var clockRunning = false;
    var time = 120;
    var timeTwo = 0;
      
         
    $('#start').on("click", startTimer);
    // $('#restart').on("click", restart);
    $('#restart').hide();

    $('#restart').on("click", function() {
        time = 120;
        clockRunning = false;
        timeTwo = 0;
        initialQuestion = 0;
        wins = 0;
        losses = 0;
        unanswered = 0;
        // $('#restart').hide();

        $('#correct').hide();
        $('#incorrect').hide();
        $('#unanswered').hide();

        
        $("#theQuestions").show();
        $('#buttons').show();
        // $("button").slice(4).hide();
        
        // start();
        // // startTimer();
        startTimer();
        starterQuestion();
        $("button").slice(4).hide();
    
    })
  
  
      // THIS FUNCTION ACTUALLY STARTS THE GAME
    function startTimer() {
  
        if (!clockRunning) {
            interval = setInterval(counter, 1000);
            intervalTwo = setInterval(shortTimer, 1000);
            //console.log(interval); // why did this say 3 lol
            clockRunning = true;
            $('#start').hide();
            $('#restart').hide();
            
        } 
        
        starterQuestion();
        
          
    }
  
  
    function counter() {
        
        var converter = timeConverter(time--);
        $('#timer').text(converter);
  
        if (time === 0) {
            //alert("Times Up");
            //console.log('You dead');
            clearInterval(interval);
            clearInterval(intervalTwo);
        }
  
    }
    
    function shortTimer() {
       
        var converter = timeConverter(timeTwo++);
        $('#recommendedTimer').text(converter);
        
        if (timeTwo === 16) {
            unanswered++;
            initialQuestion++;
            timeTwo = 0;
            starterQuestion();
            $("button").slice(4).hide();
            console.log('unanswered ' + unanswered);
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
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        
        return minutes + " : " + seconds;
    }
      
      
  
  
  // --------------------- stop watch ends -------------------- \\


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
    var unanswered = 0;

    var initialQuestion = 0;       //Math.floor(Math.random() * 7);
    var questionAmount = 10;

    function starterQuestion() {

        var questions = questionsAnswers[initialQuestion].question;
        var choices = questionsAnswers[initialQuestion].choices;
        var correctAnswer = questionsAnswers[initialQuestion].answer;
        
        console.log(questions);
        
        $("#theQuestions").html(questions + '<br>');
        



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
            console.log(value);

// This is pretty much the results condition
            
            if (initialQuestion === questionAmount) {

                clearInterval(interval);
                clearInterval(intervalTwo);
                initialQuestion = 0;
                
                $('#buttons').hide();
                $('#theQuestions').hide();
                $('#correct').show();
                $('#incorrect').show();
                $('#unanswered').show();

                $('#correct').html("Correct " + wins);
                $('#incorrect').html("Incorrect " + losses);
                $('#unanswered').html("Not Fast Enough " + unanswered);
                $('#restart').show(); 

                //restart();

            } else if (correctAnswer === value) {
                wins++;
                initialQuestion++;
                timeTwo = 0;
                console.log('Wins ' + wins);

            } else if (correctAnswer !== value) {
                losses++;
                initialQuestion++;
                timeTwo = 0;
                console.log('Losses ' + losses);

            } 
            
            starterQuestion();
            // im a genius 
            $("button").slice(4).hide();
    
        })
        
    }
    
})