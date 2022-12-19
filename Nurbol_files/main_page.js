function walk(element)
{
    var x = element.id;
    switch (x)
    {
        case "logo" : window.location.href = "https://www.youtube.com" ; break;
        case "top_trip" : window.location.href = "https://www.youtube.com" ; break;
        case "calend" : window.location.href = "https://www.youtube.com"; break;
        case "about" : window.location.href = "https://www.youtube.com"; break;
        case "feedb" : window.location.href = "https://www.youtube.com"; break;
        case "blog" : window.location.href = "https://www.youtube.com"; break;
        case "tour" : window.location.href = "https://www.youtube.com"; break;
    }
}
function scrollToTop()
{
    $('html, body').animate({scrollTop:0} , 'smooth');
}