var daysUntilMyBirthday = 60;
var days=daysUntilMyBirthday;

for(var i=days;i>-1;i--){
     if (i<30){
        if(i==0){
            console.log("Happy Birthday to me!! Space cowboys going to Las Vegas!!!!")
        }if(i<5){
            console.log("I can't believe I'm "+i+" closer to  going to Las Vegas!!!!")
        } else {
            console.log("I'm so excited that my birthday is this month. It's only "+i+" away!")
        }
    }
    if (i==30){
        console.log(i+" until my birthday, I'm almost there! 11 months down! this is the last month")
               
    }
    else if (i>30){
        console.log(i+" until my birthday, I'll never get to do these new dance moves I learned off of DDR")
    }
}
   