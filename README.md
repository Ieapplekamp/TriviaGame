# TriviaGame

Simple trivia game that is mostly dynamic. The game will start with one timer counting down and another counting up. Once the timer begins, the first question will load from the main object, then it will grab the proper choices from that object and adds them to the webpage. If the choice is correct or incorrect, it's run through a condition, and if the value matches, wins++, else losses++; But once a question is chosen, the next question and choices will appear. The user has 10 seconds per question and 2 minutes total to finish the game. Once the timer or questions run out, the page will change and all questions wrong are pushed to an empty array and then displayed at the end to allow the user to see what they got wrong. Then once all is said and done, theres a reset button that sets everything back to the original state without having to refresh the browser