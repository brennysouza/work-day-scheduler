// Jquery function that will run  once the page is fully loaded
$(document).ready(function () {
    // This code below is an event listener for the save button which uses the id in the containing time-block as a key to save the user input to users local storage.

    // event listener for click events on the save button specifically with a class save button of "saveBtn"
    $(".saveBtn").on("click", function () {
        var timeBlockId = $(this).closest(".time-block").attr("id");

        var userInput = $(this).siblings(".description").val();

        // This code stores users input to local storage
        localStorage.setItem(timeBlockId, userInput);
    });

    // The code below applies the past, present, and future class to each time block by comparing the id to the current hour. 

    // Day.js library to get the current hour through a 24 hour format.
    var currentHour = dayjs().hour();

    // This code below retreives user input from local storage
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


    // The code below retrieves any user input that was saved in localStorage because timeblock is inside local storage above

    $(".time-block").each(function () {
        var timeBlockId = $(this).attr("id");
        var userInput = localStorage.getItem(timeBlockId);

        // if there is user input, then it will display inside the text area of the application where the class description is located
        if (userInput) {
            $(this).find(".description").val(userInput);
        }
    });

    // The code below displays the current date in the header of the page.
    var currentDate = dayjs().format("MMMM D, YYYY");
    $("#currentDay").text(currentDate);

});