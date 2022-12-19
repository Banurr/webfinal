function expandContract(element) {
    var a=element.id
    $content = $("#"+a+"11")
    $content.slideToggle(500, function () {
    });
};

function spanmove(element) {
    var a=element.id
    document.getElementById(a).style.backgroundColor="white";
    document.getElementById(a+"1").style.color="rgb(10, 147, 150)";
};
function spanleave(element) {
    var a=element.id
    document.getElementById(a).style.backgroundColor="rgb(10, 147, 150)";
    document.getElementById(a+1).style.color="white";
};
$(document).scroll(function()
{
    var tt = $(this).scrollTop();
    if (tt > 300)
    {
        $("#scrr").fadeIn();
    } else
    {
        $("#scrr").fadeOut();
    }
});