// ugh I don't even know where to start with this one.. I hope this shit clicks soon cause its not
// https://www.usefultrivia.com/music_trivia/index_iii.html
// psuedo code ... im just tired i wanna bitch

// so we gotta

// Start button - something the user clicks/presses to start the code, not much else on the screen
// once pressed, the screen will change to the game itself
// the game will start a timer (fuck timers man) immediately (probably like a minute and a half would be best depending on the questions)
// there will be a bunch of questions (do the fucking hard one man just fucking do it, make the god damn screen dynamic n shit just fuckin do it)
// each question will have like 4 answers
// if the user guesses the correct choice ++ that shit at the very end
// else if the user guesses the wrong choice ++ loser total
// also if the user doesn't guess the answer count that shit against them
// somethings got to change the screen and display totals and shit once the timer is out 
// going to need something to start the next game - ya fucking reset(bitch)

// alright so what kinda variables do i need
// need that function document start thingy too

$(document).ready(function() {
    console.log('hi');

    var wins = 0;
    var losses = 0;
    var unanswered = 0;
    // possible questions
    var questions = ["Which Johnny Cash song did an advertising company want to use for a hemorrhoids ad?",
        "What was the band known as Linkin Park originally called?",
        "What was the name of the airplane Buddy Holly died in?",
        "What was Bob Marley's song 'I Shot the Sheriff' really about?", 
        "How many different instruments did Prince play on his debut album?",
        "What band did Prince form in 1981?", 
        "What band was originally named Tony Flow and the Miraculously Majestic Masters of Mayhem?"];

    // an idea
    var correctAnwers = ['Ring Of Fire', //
        'Xero', //
        'American Pie', //
        'Birth Control', //
        '27', //
        'The Time', //
        'Red Hot Chili Peppers' //
    ] 

    randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    $('#questions').append(randomQuestion);
    console.log(randomQuestion);


})