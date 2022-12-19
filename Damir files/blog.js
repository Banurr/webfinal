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
$("#blog_1_div1").click(function() {
    $("#nop").show("200");
    $("#blog_1").hide("200");
});
