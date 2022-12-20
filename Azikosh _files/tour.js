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

$('#div_1').hover(function(){
    $(this).find("#div_2").stop( true, true ).slideDown();
}, function() {
    $(this).find("#div_2").stop( true, true ).slideUp();
})

$('#div_3').hover(function(){
    $(this).find("#div_4").stop( true, true ).slideDown();
}, function() {
    $(this).find("#div_4").stop( true, true ).slideUp();
})

$('#div_5').hover(function(){
    $(this).find("#div_6").stop( true, true ).slideDown();
}, function() {
    $(this).find("#div_6").stop( true, true ).slideUp();
})