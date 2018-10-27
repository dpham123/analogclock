    // Initialize variables
    const HOURHAND = document.querySelector("#hour");
    const MINUTEHAND = document.querySelector("#minute");
    const SECONDHAND = document.querySelector("#second");

    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr * 30) + (min / 2);
    let minPosition = (min * 6) + (sec / 10);
    let secPosition = sec * 6;
    
    // Updates clock
    function runTheClock(){
        
        hrPosition += 1/120;
        minPosition += 1/10;
        secPosition += 6;

        HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
        MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
        SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
        console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
    }
    
    // Reruns script every 1000 
    var interval = setInterval(runTheClock, 1000);




