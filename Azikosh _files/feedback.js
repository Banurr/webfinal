function go(){
    window.location.href = "feedback.html";
}

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
