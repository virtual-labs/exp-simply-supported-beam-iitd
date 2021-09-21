 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Stiffness, mass, and damping are modelled as", ///// Write the question inside double quotes
            answers: {
                a: "Distributed properties", ///// Write the option 1 inside double quotes
                b: "Discrete properties", ///// Write the option 2 inside double quotes
                c: "Distributed mass",
                d: "Discrete system",
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. A continuous system is different from a discrete system.",  ///// Write the question inside double quotes
      answers: {
        a: "True",                  ///// Write the option 1 inside double quotes
        b: "False",                  ///// Write the option 2 inside double quotes
        
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
                          

    {
      question: "3. Stiffness and mass are considered to be distributed properties is referred as",  ///// Write the question inside double quotes
      answers: {
        a: "Discrete system",                  ///// Write the option 1 inside double quotes
        b: "Stiffness characteristics",                  ///// Write the option 2 inside double quotes
        c: "Degree of freedom",
        d: "Distributed or continuous system",
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
                          
     {
      question: "4. This computational model of Simply Supported Beam is based on",  ///// Write the question inside double quotes
      answers: {
        a: "Distributed system",                  ///// Write the option 1 inside double quotes
        b: "Discrete system",                  ///// Write the option 2 inside double quotes
        c: "Degree of freedom",
        d: "Distributed mass",
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },  
                          
     {
      question: "5. <i>EI</i> is the _____.",  ///// Write the question inside double quotes
      answers: {
        a: "Natural frequency",             ///// Write the option 1 inside double quotes
        b: "Length of beam",                  ///// Write the option 2 inside double quotes
        c: "Cross- sectional area",
        d: "Constant",
      },
      correctAnswer: "c"    ///// Write the correct option inside double quotes
    },                     

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
