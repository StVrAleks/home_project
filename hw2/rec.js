var myMas = [5, 7, [4, [2], 8, [1, 3], 2], 9, [], 1, 8];

myIt = treeSum(myMas);
console.log("Itogo", myIt);  

function treeSum(myArg)
{
var per = 0;     
    for(var i=0; i<myArg.length; i++)
    {
        if(Array.isArray(myArg[i])) 
            per = per + treeSum(myArg[i]);
        else
            per = per + myArg[i];     
        console.log(per);            
      }     
return per; 
}