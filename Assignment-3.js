// function kilometerToMeter(valu){
//     var kilo = valu* 1000;
//     return kilo;
// }
// var result = kilometerToMeter(84);
// console.log(result);




// function budgetCalculator(watchNum,mobNum,lapNum)
// {
//     var allAmount = watchNum * 50+mobNum * 100+lapNum * 500;
//     return allAmount;
// }
//  var result =budgetCalculator(2,2,2);
//  console.log(result)











// function hotelCost(day){
//     var stay = 0;
//     if(day <= 10){
//         stay = day * 100;

//     }
//     else if(day <= 20){
//         var firstCase = 10* 100;
//         var remaining = day - 10;
//         var secondCase = remaining*80;
//         stay = firstCase+secondCase;
//     }
//     else{
//         var firstCase = 10*100;
//         var remaining = day - 10;
//         var secondCase = 10*80;
//         var thirdCase = remaining* 50;
//         stay = firstCase+secondCase+thirdCase;
//     }
//     return stay;
// }

// var result = hotelCost(21);

// console.log(result);





function something(frndNames){
    var highLenth = frndNames[0];

    for (var i = 0; i<frndNames.length; i++)
    {
        
        var element = frndNames[i];
        if(element > highLenth){
            highLenth= element;
        }

    }
    return highLenth;
    }


var frndNames = ["Habib","Raja","Shimul","TitumirRohoman","mynameisjabbarkhan"];
var result = something(frndNames)
console.log(result);