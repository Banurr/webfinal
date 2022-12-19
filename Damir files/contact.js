$(document).scroll(function()
{
    var tt = $(this).scrollTop();
    if (tt > 300)
    {
        $("#scrra").fadeIn();
    } else
    {
        $("#scrra").fadeOut();
    }
});