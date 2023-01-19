$(document).ready(function (){
    $("#normal").keyup(function(){
        var words = $("#normal").val();
        words = words.replace(/hello/gi, "ahoy");
        $("#pirate").val(words);
    })
});




