$(document).ready(function () {


    $('button').on('click', function () {
        var value = $(this).val();
        $(".code").hide();

        var projects = ["https://chris6170.github.io/Word-Guess-Game/", "https://github.com/Chris6170/Word-Guess-Game", "https://chris6170.github.io/unit-4-game/", "https://github.com/Chris6170/unit-4-game", "https://github.com/Chris6170/unit-4-harder-game", "https://chris6170.github.io/unit-4-harder-game/", "https://chris6170.github.io/Trivia_Game/", "https://github.com/Chris6170/Trivia_Game", "https://github.com/Chris6170/GifTastic", "https://chris6170.github.io/GifTastic/", "https://github.com/Chris6170/Project-1-API-", "https://chris6170.github.io/Project-1-API-/","https://github.com/Chris6170/liri-node-app","https://github.com/Chris6170/bamazon","https://github.com/Chris6170/Friend_finder"];

        for (i = 0; i < projects.length; i++) {
            if (projects[i] === value) {
                window.location = projects[i];
            }
        }
    })

    var queryurl = "https://quotes.rest/qod.json";

    $.ajax({
        url: queryurl,
        method: "GET"
    }).then(function (response) {
        console.log(response.contents.quotes[0].quote);
        $("#test").html(response.contents.quotes[0].quote);
    });






});


