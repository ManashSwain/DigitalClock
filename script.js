let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

  
// Function to show the time 
 const showTime = () => {

    // Getting current date  
    let date = new Date();

    // Getting current hours and appending in UI
    let hours = date.getHours();
    hr.innerHTML = hours;

    // Getting current minutes and appending in UI 
    let minutes = date.getMinutes();
    min.innerHTML = minutes;

    // Getting current seconds and appending in UI 
    let seconds = date.getSeconds();
    sec.innerHTML = seconds;

 }

 setInterval(showTime,1000);

//  This interval runs every 1 second which will update the time 

// Calling the function 
 showTime();
