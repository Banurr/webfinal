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
function dodo(name , pochta , telefon)
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var phoneno = /^\d{10}$/;
    var check=false;
    var check1=false;
    if (pochta.match(mailformat)) {
        check=true;
    } else {
        alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
    }
    if(telefon.match(phoneno))
    {
        check1=true
    }
    else
    {
        alert("You have entered an invalid Phone Number");
        return false;
    }
    if(check&&check1&&name.length>0){
        alert("start");
        $.ajax({
            url : '../Damir files/sign.php',
            type : 'POST',
            data : {username :  name, email : pochta, phone : telefon},
            success : function (result)
            {
                console.log(result);
                if(result === "Success!")
                {
                    alert("You are signed in!");

                }
                else alert("Wrong input");
            },
            error : function ()
            {
                console.log("error");
            }
        });
    }

};
function isNumber(char) {
    return /^\d$/.test(char);
};
function ValidateEmail(inputText) {
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("You have entered a valid email address!");    //The pop up alert for a valid email address
        return true;
    } else {
        alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
        return false;
    }
};