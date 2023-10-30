// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
        // event listener for click events on the save button.
        $(".saveBtn").on("click", function () {
            // parent time-block id fetch
            var timeBlockId = $(this).closest(".time-block").attr("id");
    
            // user input from the associated textarea
            var userInput = $(this).siblings(".description").val();
    
            // Save the user input in local storage
            localStorage.setItem(timeBlockId, userInput);
        });

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
        var timeBlockId = parseInt($(this).attr("id").split("-")[1]); 

        if (timeBlockId < currentHour) {
            $(this).addClass("past");
        } else if (timeBlockId === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });



    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    $(".time-block").each(function () {
        var timeBlockId = $(this).attr("id");
        var userInput = localStorage.getItem(timeBlockId);

        if (userInput) {
            $(this).find(".description").val(userInput);
        }
    });

    // TODO: Add code to display the current date in the header of the page.
    var currentDate = dayjs().format("MMMM D, YYYY");
    $("#currentDay").text(currentDate);

  });