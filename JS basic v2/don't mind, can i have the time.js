
    var hour = 8;
    var minute = 50;
    var period = "AM";

    if(hour == 8 && minute == 50 && period == "AM")
    {
            console.log("It's almost 9 in the morning");
    }
    
    var hour = 7;
    var minute = 15;
    var period = "PM";
    
    if(hour == 7 && minute == 15 && period == "PM")
    {
        console.log("It's just after 7 in the evening");
    }




    if(minute>49 && period == "AM")
    {
        console.log("it's almost "+ hour +" in the morning")
    }

    else if (minute < 16 && period == "PM")
    {
        console.log("it's just after"+ hour)
    }
 

// Challenge

if(minute>30 )
    {
       if(period=="AM"){
            console.log("it's almost "+ (hour+1) +"in the morning")
       } else if (period=="PM"){
           console.log("it's almost "+ (hour+1) + "in the evening")
       }
        
    }
  
else if(minute<30)
    {
        if(period=="AM"){
            console.log("it's just after "+ hour + " in the morning")
        } else if (period=="PM"){
            console.log("it's just after "+ hour + " in th evening")
        }
        
    }

    
    
    







