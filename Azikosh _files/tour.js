$(document).scroll(function()
{
    var tt = $(this).scrollTop();
    if (tt > 300)
    {
        $("#scrrr").fadeIn();
    } else
    {
        $("#scrrr").fadeOut();
    }
});