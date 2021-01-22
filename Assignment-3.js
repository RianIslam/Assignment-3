//code Link: https://github.com/RianIslam/Assignment-3



//[1. kilometer to meter]
function kilometerToMeter(valu){
    if(valu>=0){
        var kilo = valu* 1000;
        return kilo;
    }else{
        console.log("ERROR")
    }
}
var result = kilometerToMeter(6);
console.log(result);




//[2. budgetCalculator]
function budgetCalculator(watchNum,mobNum,lapNum)
{
    if(watchNum>0,mobNum>0,lapNum>0)
    {
        var allAmount = watchNum * 50+mobNum * 100+lapNum * 500;
        return allAmount;
    }
    else
    {
        console.log("ERROR");
    }
}
 var result =budgetCalculator(1,1,1);
 console.log(result);







//[3. hotelCost]
function hotelCost(day){
    var stay = 0;
    if(day <= 10){
        stay = day * 100;

    }
    else if(day <= 20){
        var firstCase = 10* 100;
        var remaining = day - 10;
        var secondCase = remaining*80;
        stay = firstCase+secondCase;
    }
    else{
        var firstCase = 10*100;
        var remaining = day - 20;
        var secondCase = 10*80;
        var thirdCase = remaining* 50;
        stay = firstCase+secondCase+thirdCase;
    }
    return stay;
}

var result = hotelCost(21);

console.log(result);






//[4. megaFriend]
function megaFriend(frndNames){
    var highLenth = frndNames[0];

    for (var i = 0; i<frndNames.length; i++)
    {
        
        var element = frndNames[i];
        if(element.length > highLenth.length){
            highLenth= element;
        }

    }
    return highLenth;
    }


var frndNames = ["Shimul","RajaKhan","karim"];
var result = megaFriend(frndNames);
console.log(result);



