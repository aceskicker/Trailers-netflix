$(document).ready(function(){
    $("#burguer").click(function(){
        $("#burguer").toggleClass("abierto");
        $(".section-header").toggleClass("abierto");
    })
})