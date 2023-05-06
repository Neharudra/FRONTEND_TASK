const op = process.argv[2];
if(op=="sub" || op=="div"){
    if(process.argv.length>5){
        console.log("Enter 2 values only");
    }
    else {
       var n1=parseInt(process.argv[3]);
       var n2=parseInt(process.argv[4]);
    }  
    if(op=="sub"){
        const res=n1-n2;
        console.log("--operation subtraction is",res);
    } 
    if(op=="div"){
        const res=n1/n2;
        console.log("--operation division is",res);
    } 
}
if(op=="add" || op=="mul"){
    var arr=[];
    for (var i=3;i<process.argv.length;i++){
        var number=parseInt(process.argv[i]);
        if(!isNaN(number)){
            arr.push(number); 
        }
        else{
            console.log("Please enter a valid number");
        }
    }
    if(op=="add"){
        let sum=0;
        for(var i=0;i<arr.length;i++){
             sum = sum +arr[i];
        }
        console.log("--operation addition is",sum);
    } 
    if(op=="mul"){
        let mul=1;
        for(var i=0;i<arr.length;i++){
             mul = mul * arr[i];
        }
        console.log("--operation multiplication is",mul);
    } 
}

