// Write your Javascript code.


$(function () {
    $("#getgame").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.alert("Clicked!");
    });
});
