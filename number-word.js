var convertNumberToWord = (function(number) {
        if(number<100) {
            return number;
        }
        var word = "";
        var tempData = number.toString();

        if(tempData.length<9) {
            var zero = "";
            for(var index=0;index<(9-tempData.length); index++) {
                zero += "0";
            }
            tempData = zero+tempData;
        }
        word = (((tempData[tempData.length-7]!="0")?tempData[tempData.length-7]:"")+((tempData[tempData.length-6]!="0")?tempData[tempData.length-6]:((tempData[tempData.length-7]!=0)?tempData[tempData.length-6]:""))+((tempData[tempData.length-7]!=0||tempData[tempData.length-6]!=0)?" Lakh ":""))+ ((tempData[tempData.length-5]!="0"?tempData[tempData.length-5]:"")+(tempData[tempData.length-4]!="0"?tempData[tempData.length-4]:(tempData[tempData.length-5]!="0"?tempData[tempData.length-4]:""))+((tempData[tempData.length-5]!="0"||tempData[tempData.length-4]!="0")?" Thousand ":"")) + ((tempData[tempData.length-3]!="0")?(tempData[tempData.length-3] + " Hundred "):"") +  ((tempData[tempData.length-2]!="0"?tempData[tempData.length-2]:"")+((tempData[tempData.length-1]!="0")?tempData[tempData.length-1]:((tempData[tempData.length-2]!="0")?tempData[tempData.length-1]:"")));
        var flag = 0;
        for(var index=0;index<=tempData.length-8;index++) {
            if(tempData[index]!="0") {
                word = tempData.slice(index, tempData.length-7)+" Crore " + word;
                break;
            }
        }
        return word+"  ("+number+") ";
    });
