function convert(){
    var inputBin = document.getElementById("binaryInput").value;
    if(checkConvert(inputBin)){
        var decimal = bin2dec(inputBin);
        document.getElementById("result").value = decimal;
    }
    
}

function checkBin(binary){
    var pattern  =  /[^0-1]/;
    var result = binary.match(pattern);
    if(result != null )
    {
        return false;
    }

    return true;
}

// function checkSize(binary){
//     if(binary.length > 8){
//         return false;
//     }

//     return true;
// }

function checkConvert(binary){
    if(checkBin(binary)){
        // if(!checkSize(binary)){
        //     window.alert("Input maximum size is 8");
        //     return false;
        // }
    }else{
        window.alert("Input must be only binary");
        return false;
    }

    return true;
}

function bin2dec(binary){
    var decimal = 0;
    var exponent = 0;
    for(var i=binary.length-1;i>=0;i--){
        decimal += binary[i] * Math.pow(2,exponent);
        exponent++;
    }
    return decimal;
}