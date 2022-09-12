var timeleft = 60;
        var time = setInterval(function(){
            if(timeleft == 0){
            clearInterval(time);
            document.getElementById("timer").innerHTML = "HURRY UP!";
               } else 
               {document.getElementById("timer").innerHTML = timeleft + " Seconds";}
              timeleft -= 1;
                }, 1000);

             function button(){
            if (timeleft >= 1) {
                // document.getElementById("notify").innerHTML = "Well done!";
                alert("Well done!");
                clearInterval(timeleft);
                console.log(timeleft);
            }
            else if (timeleft <= 0){
                // document.getElementById("notify").innerHTML = "HURRY UP!";
                alert("HURRY UP!");
                console.log(timeleft);
            }
         }

var timeleft1 = 60;
        var time1 = setInterval(function(){
            if(timeleft1 == 0){
            clearInterval(time1);
            document.getElementById("timer2").innerHTML = "HURRY UP!";
               } else 
               {document.getElementById("timer2").innerHTML = timeleft1 + " Seconds";}
              timeleft1 -= 1;
                }, 1000);

             function buttondrink(){
            if (timeleft1 >= 1) {
                // document.getElementById("notify").innerHTML = "Well done!";
                alert("Well done!");
            clearInterval(timeleft1);
                console.log(timeleft1);
            }
            else if (timeleft1 <= 0){
                // document.getElementById("notify").innerHTML = "HURRY UP!";
                alert("HURRY UP!");
                console.log(timeleft1);
            }
         }

function getMenu(){
    document.getElementById('food1').innerHTML = localStorage.getItem('food1');
    document.getElementById('food2').innerHTML = localStorage.getItem('food2');
    document.getElementById('food3').innerHTML = localStorage.getItem('food3');
    document.getElementById('food4').innerHTML = localStorage.getItem('food4');

    document.getElementById('drink1').innerHTML = localStorage.getItem('drink1');
    document.getElementById('drink2').innerHTML = localStorage.getItem('drink2');
    document.getElementById('drink3').innerHTML = localStorage.getItem('drink3');
    document.getElementById('drink4').innerHTML = localStorage.getItem('drink4');

}