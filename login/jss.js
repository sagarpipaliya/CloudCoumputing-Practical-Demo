function m1()
{
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if(x == "" || atpos < 1 || (dotpos-atpos < 2))
        {
            document.getElementById("email").focus();
            document.getElementById("email").style.border = "2px solid red";
            return false;
        }
    else
        {
            document.getElementById("email").style.border = "2px solid lime";
            return true;
        }
    
    var y = document.getElementById("pass").value.length;
    if(y < 8 || y == "")
        {
            document.getElementById("pass").focus();
            document.getElementById("pass").style.border = "2px solid red";
            return false;
        }
    else
        {
            document.getElementById("pass").styleborder = "2px solid lime";
            return true;
        }
}