$(document).ready(function () {

    var timeLeft = 30;
    var elem = document.getElementById('countdown');
    var timerId = setInterval(countdown, 1000);


    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            elem.innerHTML = timeLeft + ' Seconds Remaining'; }

           else if (timeLeft == -1) {
                clearTimeout(timerId);
                doSomething();
                elem.innerHTML = timeLeft + ' Seconds Remaining';
            }
        
        
        else {
            elem.innerHTML = timeLeft + ' Seconds Remaining';
            timeLeft--;
        }

    }
   
   
    console.log($( "input[name=cgi]:radio" ).val("Toy Story")); 






});

