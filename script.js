$(document).ready(function (){
    $("#normal").keyup(function(){
        var words = $("#normal").val();
        words = words.replace(/(\w+)ev(\w+)\s/g, "$1e'$2 ");
        $("#pirate").val(words);
    })
});




