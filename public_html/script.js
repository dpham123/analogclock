    // Initialize variables
    const HOURHAND = document.querySelector("#hour");
    const MINUTEHAND = document.querySelector("#minute");
    const SECONDHAND = document.querySelector("#second");

    var date = new Date();
    var positions = [0, 0, 0];
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr * 30) + (min / 2);
    let minPosition = (min * 6) + (sec / 10);
    let secPosition = sec * 6;
    
    // Updates clock
    function runTheClock(){
        
        date = new Date();
        hr = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();
        
        // Counts number of cycles around clock
        if (hr === 0){
            positions[0]++;
        }
        
        if (min === 0){
            positions[1]++;
        }
        
        if (sec === 0){
            positions[2]++;
        }
        

        hrPosition = (positions[0] * 360) + (hr * 30) + (min / 2);
        minPosition = (positions[1] * 360) + (min * 6) + (sec / 10);
        secPosition = (positions[2] * 360) + (sec * 6);

        HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
        MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
        SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
        console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
    }
    
    // Reruns script every 1000 milliseconds
    var interval = setInterval(runTheClock, 1000);




