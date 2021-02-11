function countdown(laPlace, laDate){
    // Set the date we're counting down to
    var countDownDate = new Date(laDate).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById(laPlace).innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the day < 0
    if(days <1){
        document.getElementById(laPlace).className="pl-2 text-danger";
    }

    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(x);
    document.getElementById(laPlace).innerHTML = "FINISHED";
    document.getElementById(laPlace).className = "pl-2 finishColor";
    }
    }, 1);

}