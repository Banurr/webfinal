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
    $("#blog_10").show("200");
    $("#blog_1").hide("200");
    $("#head").hide("200");
    $("#ending").hide("200");
    $("#scrrr").hide("200");
});
$("#blog_1_div2").click(function() {
    $("#blog_20").show("200");
    $("#blog_1").hide("200");
    $("#head").hide("200");
    $("#ending").hide("200");
    $("#scrrr").hide("200");
});
$("#blog_10_button").click(function() {
    $("#blog_10").hide("200");
    $("#blog_1").show("200");
    $("#head").show("200");
    $("#ending").show("200");
    $("#scrrr").show("200");
});
$("#blog_20_button").click(function() {
    $("#blog_20").hide("200");
    $("#blog_1").show("200");
    $("#head").show("200");
    $("#ending").show("200");
    $("#scrrr").show("200");
});
