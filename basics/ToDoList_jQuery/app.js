// Event Bubbling
// https://www.geeksforgeeks.org/event-bubbling-in-javascript/

// mark todo as completed
// we set the on event listener on parent with a specific children to act as a trigger for the event
$("ul").on(
    "click",
    "li", // li is the trigger for the event
    function () //added click listener on the entire ul and i want to do something to li
    {
        // alert("Clicked on li");
        $(this).toggleClass("completed"); //this refers to li
    }
);

// remove todo
$("ul").on("click", "span", function (event) {
    // alert("Clicked on Span");

    $(this)
        .parent()
        .fadeOut(800, function () {
            $(this).remove();
        });
    event.stopPropagation(); //to stop Event Bubbling
});

//add todo
$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        const toDoText = $(this).val();
        const toDo = `<li><span><i class="fas fa-trash-alt"></i> </span>${toDoText}</li>`;
        $("ul").append(toDo);
        $(this).val("");
    }
});

$("#minus").click(function () {
    $("input[type='text']").fadeToggle();
});
