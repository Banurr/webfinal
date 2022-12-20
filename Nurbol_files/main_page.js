function walk(element)
{
    var x = element.id;
    switch (x)
    {
        case "logo" : window.location.href = "../Nurbol_files/main_page.html" ; break;
        case "top_trip" : window.location.href = "../Azikosh _files/tour.html" ; break;
        case "calend" : window.location.href = "../Nurbol_files/Calendar.html"; break;
        case "about" : window.location.href = "../Damir files/Aboutus.html"; break;
        case "feedb" : window.location.href = "../Azikosh _files/feedback.html"; break;
        case "blog" : window.location.href = "../Damir files/blog.html"; break;
        case "contact" : window.location.href = "../Nurbol_files/contact.html"; break;
    }
}
function scrollToTop()
{
    $('html, body').animate({scrollTop:0} , 'smooth');
}
$(document).scroll(function()
{
    var tt = $(this).scrollTop();
    if (tt > 300)
    {
        $("#scr").fadeIn();
    } else
    {
        $("#scr").fadeOut();
    }
});
function totherules()
{
    window.open("../Nurbol_files/PolicyPrivacy.html", '_blank');
}
function start_trip()
{
    window.location.href = "../Nurbol_files/Calendar.html";
}
function tothecon()
{
    window.location.href = "../Nurbol_files/contact.html";
}
function qqq()
{
    window.location.href = "../Azikosh _files/tour.html";
}