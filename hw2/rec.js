var myMas = [5, 7, [4, [2], 8, [1, 3], 2], 9, [], 1, 8];

myIt = treeSum(myMas);
console.log("Itogo", myIt);  

function treeSum(myArg)
{
var index = 0; 
var per = 0;     
    do{
        if(Array.isArray(myArg[index])) 
            per = per + treeSum(myArg[index]);
        else
            per = per + parseInt(myArg[index]);     
        console.log(per);            
        index ++;
      }
    while(index < myArg.length);    
return parseInt(per); 
}