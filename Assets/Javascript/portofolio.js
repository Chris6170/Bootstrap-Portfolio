$(document).ready(function () {


    $('button').on('click', function () {
        var value = $(this).val();
        $(".code").hide();

        if (value === "https://chris6170.github.io/Word-Guess-Game/") {
            window.location = "https://chris6170.github.io/Word-Guess-Game/"

        }

        if (value === "https://github.com/Chris6170/Word-Guess-Game") {
            window.location = "https://github.com/Chris6170/Word-Guess-Game"

        }

        if (value === "https://chris6170.github.io/unit-4-game/") {
            window.location = "https://chris6170.github.io/unit-4-game/"

        }

        if (value === "https://github.com/Chris6170/unit-4-game") {
            window.location = "https://github.com/Chris6170/unit-4-game"

        }

        if (value === "https://github.com/Chris6170/unit-4-harder-game") {
            window.location = "https://github.com/Chris6170/unit-4-harder-game"

        }

        if (value === "https://chris6170.github.io/unit-4-harder-game/") {
            window.location = "https://chris6170.github.io/unit-4-harder-game/"

        }

        if (value === "https://chris6170.github.io/Trivia_Game/") {
            window.location = "https://chris6170.github.io/Trivia_Game/"

        }

        if (value === "https://github.com/Chris6170/Trivia_Game") {
            window.location = "https://github.com/Chris6170/Trivia_Game"

        }



        if (value === "https://github.com/Chris6170/GifTastic") {
            window.location = "https://github.com/Chris6170/GifTastic"

        }

        if (value === "https://chris6170.github.io/GifTastic/") {
            window.location = "https://chris6170.github.io/GifTastic/"

        }

        if (value === "https://github.com/Chris6170/Project-1-API-") {
            window.location = "https://github.com/Chris6170/Project-1-API-"

        }

        if (value === "https://chris6170.github.io/Project-1-API-/") {
            window.location = "https://chris6170.github.io/Project-1-API-/"

        }

        if (value === "https://github.com/Chris6170/liri-node-app") {
            window.location = "https://github.com/Chris6170/liri-node-app"

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


