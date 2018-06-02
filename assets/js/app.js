console.log("yo");

// You 'll create a trivia form with multiple choice or true/false options (your choice).

//var to hold a questions array
  //question object
    //properties
    //question //the quesytion your asking
    //options //array of posible options
    //correctAnswer
    var questions = [{
      question: "What was the first full length CGI movie?",
      options: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
      correctAnswer: "Toy Story"
    }, {
      question: "Which of these is NOT a name of one of the Spice Girls?",
      options: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
      correctAnswer: "Fred Spice"
    }, {
      question: "Which NBA team won the most titles in the 90s?",
      options: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
      correctAnswer: "Chicago Bulls"
    }, {
      question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
      options: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
      correctAnswer: "Nirvana"
    }, {
      question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
      options: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
      correctAnswer: "The Lion King"
    }, {
      question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
      options: ["Dice", "Mirror", "Fresh", "Cab"],
      correctAnswer: "Fresh"
    }, {
      question: "What was Doug's best friend's name?",
      options: ["Skeeter", "Mark", "Zach", "Cody"],
      correctAnswer: "Skeeter"
    }, {
      question: "What was the name of the principal at Bayside High in Saved By The Bell?",
      options: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
      correctAnswer: "Mr.Belding"
    }];

    var numCorrect = 0;
    var numWrong = 0;
    var timeLeft = 10
    var timerId;

//display wach one of those questions on the screen
  //for loop over all questions and display each one individually
   // Don 't let the player pick more than one answer per question. //look for html option or select dropdown
   function generateQuestions(){
     for(var i = 0; i < questions.length; i++){
      var row = $(`<div class="row"></div>`);
      var question = $(`<legend>${questions[i].question}</legend>`)
      row.append(question)
  
      var col = $('<div class="col-sm-10"></div>');
  
      for(var j = 0; j < questions[i].options.length; j++){
        var option = $(`
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios${i}" id="gridRadios" value="${questions[i].options[j]}">
                <label class="form-check-label" for="gridRadios${i}">
                  ${questions[i].options[j]}
                </label>
              </div>
          `)
          col.append(option)
      }
  
      row.append(col)
  
      $('#formGroups').append(row);
     }
     $('#formGroups').append($(`<button id="submit">submit</button>`))
   }

   generateQuestions()
    


  //grab what answer they clicked on
   $('#formGroups').on('click', `#submit`, function (event) {
      event.preventDefault();

        getResults()

        
   })
   //$("input[name=rate]:checked").val()
  
  // The player will have a limited amount of time to finish the quiz.
    // Don 't forget to include a countdown timer.

  function startTimer () {
    //start our timer
    $("#timer").text(timeLeft)
    timerId = setInterval(timer, 1000)
  }

  function timer() {
    //count down our time var
    timeLeft--
    $("#timer").text(timeLeft)
    //check to see if we have time left
      //if we have time left count down
      //else show the correct and wrong
    if (timeLeft <= 0) {
      clearInterval(timerId)
      getResults()
      restart()
    }
  }
  startTimer()
// The game ends when the time runs out or they hit a submit button.The page will reveal the number of questions that players answer correctly and incorrectly.

function getResults(params) {
  for (var i = 0; i < questions.length; i++) {
    var value = $(`input[name=gridRadios${i}]:checked`).val()
    console.log(value);
    //if radio button is equal to the correct answer then we know they got it right
    if (value == questions[i].correctAnswer) {
      numCorrect++
    } else {
      numWrong++
    }
    //var to hold number of things correct number
    //increment 
    //else
    //we know they got it wrong
    //var to hold the things they got wrong number
    //incement
  }

  alert(`hey you got ${numCorrect} correct and ${numWrong} wrong`)
}

function restart (){
  timeLeft = 10;
  numCorrect = 0;
  numWrong = 0;
  startTimer()
}
