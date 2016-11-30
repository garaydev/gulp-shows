
$(function () {
    $("#doubleclick").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.alert("Double Clicked!");
    });
});
