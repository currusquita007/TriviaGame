 //questions for the Triva game
 var questions = ['Which album sold more records in the 2000s: NSYNC’s “No Strings Attached” or the Beatles "1"?',
     'In “Mean Girls,” which Missy Elliot song is playing when Janis and Damian tell Cady about the Plastics?',
     'What was the name of the band Mark Hoppus and Travis Barker formed after they left Blink-182?',
     'What year did Janet Jackson have her "wardrobe malfunction" during the Super Bowl halftime show?',
     'What is the name of the high school that Ryan, Marissa, Seth, and Summer attended on “The O.C.”?',
     'Who did Joey Potter end up with at the end of “Dawson’s Creek”?',
     'What’s the name of Napoleon’s llama in "Napoleon Dynamite"?',
     'What is Nelly’s real name?',
     'Where did Lizzie and Gordo share their first kiss?',
     'Who did Tom Cruise call “glib” during an interview?'
 ];

 // possible answers

 var answers1 = ['NSYNC “No Strings Attached"', 'Pass That Dutch', 'Box Car Racer',
     '2003', 'Harbor School', 'Dawson', 'Gina', 'Cornell Iral Haynes Jr.', 'Paris', 'Jon Stewart'
 ];
 var answers2 = ['The Beatles “1”', 'Work It', '+44', '2004', 'Bayview School', 'Pacey', 'Tina', 'Joseph Franklin Harrison Jr.', 'Rome', 'Matt Lauer'];

 //set a counter of 30 seconds
 var number = 30;


 $(document).on('click', '#startGameButton', displayQuestions);

 function displayQuestions() {

 $('.row').remove('#startButton');

//start the clock ( I commented this out cause it does not work at the same time as displaying the questions ...)

// runTime();

// function runTime() {
//     counter = setInterval(decrement, 1000);
// };

// // The decremeent function.
// function decrement() {
//     // Decrease number by one.
//     number--;
//     // Show the number in the #show-number tag.
//     var watch = $('<div id="show-time">');
//     $('#show-time').html('<h2>' + number + '</h2>');
//     $('#game-section').append(watch);
//     // Once number hits zero...
//     if (number === 0) {
//         // ...run the stop function.
//         stop();
//         // Alert the user that time is up.
//         alert('Time Up!')
//     }
// };

// // The stop function
// function stop() {
//     // Clears our "counter" interval.
//     // We just pass the name of the interval
//     // to the clearInterval function.
//     clearInterval(counter);
// }






 var panelPrimary = $('<div>');
 panelPrimary.addClass('panel-primary');

 var panelHeading = $('<div> <h2>' + 'Questions' + '</h2></div>');
 panelHeading.addClass('panel-heading');

 var panelBody = $('<div>');
 panelBody.addClass("panel-body");
 var question = [];

 for (var i = 0; i < questions.length; i++) {

     var radioBtn1 = $('<input type="radio" name="rbtnCount" />');
     radioBtn1.attr('label', answers1[i]);




     var radioBtn2 = $('<input type="radio" name="rbtnCount" />');
     radioBtn2.attr('label', answers2[i]);

     var questionNumber = i + 1;

     question.push($('<div><h3>Question #' + questionNumber +
         '<div><h3>' + questions[i] + "<ul><li><input type='radio' id='f-option" + i + "' name='rbtnCount' /><span>" +
         answers1[i] + ' <ul><li><input type="radio" id="s-option" name="rbtnCount" /><span>' + answers2[i] + '</div>'));


     // questionNumber.append(question).append(radioBtn1);

     $(".panel-heading").append(question[i]);
     // $(".panel-heading").append(questionNumber);

 };

 panelPrimary.append(panelHeading);


 $('#game-section').append(question);


 };

//we need to check how many answers are correct
 var getCheckedAnswers = function() {

     var answers = [];

     $('input:radio').each(function() {

         var $this = $(this),
             id = $this.attr('id'),
             url = $this.attr('datasrc');

         if ($(this).prop('checked')) {
             urls.push('<div class="' + id + '">' + url + '</div>');
         }

     });

     return urls;

 };
