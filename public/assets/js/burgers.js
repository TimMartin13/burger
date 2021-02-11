$(function() {
    $(".change-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newDevouredState = {
            devoured: 1
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
        }).then(
        function() {
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
        name: $("#ca").val().trim(),
        devoured: 0
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
      );
    });

    $('li').each(function() {
        var back = ["green","red","saddlebrown","goldenrod","orange","olive"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $(this).css('background',rand);
    });
})
