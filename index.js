//Assignment 3

function groupSubjects(group){
    if(group == 'Science subjects'){
        console.log("Physics, Chemistry, Biology, Technical Drawing");
    }else if(group == 'Social Science Subjects'){
        console.log("Accounting, Commerce, Marketing, Geography");
    }else if(group == "Arts Subjects"){
        console.log("Government, Economics, Literature, History");
    }else{
        console.log("English, Mathematics");
    }
    
}



//Assignment 5

function powerNearest(number){

    let greaterPower  = 1,  lessPower, pwr;
    /*if(number!=1)&&(number & (number-1)) == 0{
        return number;
    }*/

    //finds the nearest power of 2 that is greater than the  input number
    while(greaterPower < number){
        greaterPower <<=1;
    }

    //finds the nearest power of 2 that is less than the  input number
    lessPower = greaterPower >> 1;

    //compares the greater power with the less power and then 
    //it assign to the variable pwr the power of 2 that is nearest to the number.
    if(greaterPower - number < number - lessPower){       
        pwr = greaterPower;
    }
    else{        
        pwr = lessPower;
    }

    console.log("The number "+pwr+" is the power of 2 nearest to "+ number+".");
}


console.log(groupSubjects('Science subjects'));
console.log(powerNearest(40));
