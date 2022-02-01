$(document).ready(function(){
    $("#burguer").click(function(){
        $("#burguer").toggleClass("abierto");
        $(".section-header").toggleClass("abierto");
    })
});

$(document).ready(function(){
    $(".icono-trailer").click(function(){
        $(".columna__trailers").toggleClass("abierto");
        $(".reproductor").toggleClass("abierto");
    })});