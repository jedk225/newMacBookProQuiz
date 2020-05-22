$(document).ready(function () {

    //alert to give player a chance to go over instructions before timer countdown begins
    alert("You have 90 seconds to correctly answer as many MacBook questions possible");

    //global variables
    var correct = 0;
    console.log("Correct: " + correct);
    var incorrect = 0;
    console.log("Incorrect: " + incorrect);
    console.log("------------")
    var seconds = 90;
    console.log("Seconds: " + seconds);
    setTimeout(countDown, 1000);

    //Editing the DOM to display coundown function
    $("#time-remaining").html("<h4>" + "Time Remaining: " + seconds + " seconds" + "</h4>");

    //Function to decrement the "seconds" variable every second. Will call the submitAnswers function when seconds hit 0
    function countDown() {
        seconds--;
        if (seconds > 0) {
            setTimeout(countDown, 1000);
        } else {
            submitAnswers();
        }
        console.log(seconds);
        $("#time-remaining").html("<h4>" + "Time Remaining: " + seconds + " seconds" + "</h4>");

    }

    //Function to check answers
    function submitAnswers() {
        var correctAnswer1 = document.getElementById("1a");
        if (correctAnswer1.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer2 = document.getElementById("2c");
        if (correctAnswer2.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer3 = document.getElementById("3d");
        if (correctAnswer3.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer4 = document.getElementById("4c");
        if (correctAnswer4.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer5 = document.getElementById("5b");
        if (correctAnswer5.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer6 = document.getElementById("6d");
        if (correctAnswer6.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer7 = document.getElementById("7b");
        if (correctAnswer7.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }

        var correctAnswer8 = document.getElementById("8c");
        if (correctAnswer8.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }

        var correctAnswer9 = document.getElementById("9d");
        if (correctAnswer9.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }

        var correctAnswer10 = document.getElementById("10d");
        if (correctAnswer10.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }

        var correctAnswer11 = document.getElementById("11c");
        if (correctAnswer11.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }

        //alert("Correct: " + correct);
        //alert("Incorrect: " + incorrect);
        //window.location.href = 'results.html';

        //Displays results
        $("#main-body").html("<h3>" + "Correct: " + correct + "</h3>" +
            "<h3>" + "Incorrect: " + incorrect + "</h3>" +
            "<h3>" + "Percentage Correct: " + Math.floor(correct / (correct + incorrect) * 100) + "%" + "</h3>");
        $("#main-body").append("<br>" + '<a id="start-over" href="index.html">Start Over</a>')

    }

    //Button that calls the submitAnswers function
    $("#submitBTN").click(function () {
        submitAnswers();
    });


});