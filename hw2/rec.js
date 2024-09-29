var myMas = [5, 7, [4, [2], 8, [1, 3], 2], 9, [], 1, 8];

var myIt = 0;
for(let i = 0; i < myMas.length; i++)
{ 
    myIt = myIt + treeSum(myMas[i]);
    console.log("itog", i, myIt);
}  
console.log("Itogo", myIt);  

function treeSum(myArg){
  
    if(myArg.length === 1 ||  isNaN(myArg.length)){
         if(isNaN(myArg))
            return parseInt(0);
         else
            return parseInt(myArg);
    }
    else{
    var index = 0; 
    var per = 0;          
        do{
            if(myArg.length > 0)
                per = per + treeSum(myArg[index]);
            else
                per = per + 0;
            index ++;
        }
        while(index < myArg.length);
        return parseInt(per); 
    }
}