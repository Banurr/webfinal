function go(){
    window.location.href = "feedback.html";
}

$(document).scroll(function()
{
    var tt = $(this).scrollTop();
    if (tt > 4916 / 2)
    {
        $("#scr").fadeIn();
    } else
    {
        $("#scr").fadeOut();
    }
});