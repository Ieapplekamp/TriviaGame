// https://www.usefultrivia.com/music_trivia/index_iii.html

$(document).ready(function() {
// Start button - something the user clicks/presses to start the code, not much else on the screen
    
// the game will start a timer (fuck timers man) immediately (probably like a minute and a half would be best depending on the questions)

    var wins = 0;
    var losses = 0;
    var unanswered = 0;


    //function home() {
        // i want this to be how the home screen will display for the user. it wont be used more than once maybe
    //}

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
        { // doesn't show up
            question: "What band was originally named Tony Flow and the Miraculously Majestic Masters of Mayhem?",
            choices: ["Pear Jam", "Red Hot Chili Peppers", "Pierce The Veil", "G-Unit"],
            answer: 'Red Hot Chili Peppers'
        }
        
    ];

    var initialQuestion = Math.floor(Math.random() * 7);
    console.log(initialQuestion);
    
    function startGame() {

        var questions = questionsAnswers[initialQuestion].question;
        var choices = questionsAnswers[initialQuestion].choices;

        $("#questions").html(questions + '<br>' + questionChoices(choices));

    }

    function questionChoices(choices) {
        var result = '';

        for (var i = 0; i < choices.length; i++) {
            result += `<h6 class="buttons" data-answer="${choices[i]}">${choices[i]}</h6>`;
        }

        $(document).on('click', '.buttons', function() {
            console.log(questionsAnswers[i].choices); // currently undefined
        });
        
        return result;
        
    }
    
    // function onClicks() {
    //     $(document).on('click', '.buttons', function() {
    //         console.log(questionsAnswers.choices); // currently undefined
    //     });
        
    // }
    // onClicks();




    // --------------------- stop watch attempt --------------------- \\
    


    var interval;

    var clockRunning = false;
    var time = 0;
    
        
    $('#start').on("click", startTimer);


    // THIS FUNCTION ACTUALLY STARTS THE GAME


    function startTimer() {

        if (!clockRunning) {
            interval = setInterval(counter, 1000);
            console.log(interval); // why did this say 7 lol
            clockRunning = true;
        } 
        
        startGame();

    }

    function counter() {

        var converter = timeConverter(time++);
        $('#timer').text(converter);

        if (time === 11) {
            alert("Times Up");
            console.log('You dead');
            clearInterval(interval);
            ;
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
    
    
})



// if the user guesses the correct choice ++ that shit at the very end
    
// else if the user guesses the wrong choice ++ loser total
    
// also if the user doesn't guess the answer count that shit against them

// somethings got to change the screen and display totals and shit once the timer is out 
    
// going to need something to start the next game - ya fucking reset(bitch)