//var val1 = "My name is" ;
//var val2 = " Aklilu";
//var message = val1+val2;

// alert(message);
//console.log(message);
//var my_balance = 2000;
//var Jordan=1800;
//
//
//if (Jordan<my_balance)
//   my_balance-=Jordan;
//   {
//console.log ("I bought Jordan shoes");
//console.log ("My account balance:"+my_balance) ;
//   }
//
//else 
//console.log("cry");
//var someval=10;
//for(var x=0;x<someval;x++){
//console.log(x);
//}

//var students=["ake","teddy","alex","menge","mola"];
//
//for(x=0;x<[3];x++){
//
//console.log(students[x]);
//}
function area(length,width)
{

return length*width;

}
var area2=area(20,10);
console.log(area2);
var rectanglesareas=[];
rectanglesareas.push(area(12,10));
rectanglesareas.push(area(2,10));
rectanglesareas.push(area(10,10));
console.log(rectanglesareas);
 
var bankbalance=500;
function maketransaction(priceofsale){
if (priceofsale<=bankbalance){
	
	bankbalance-=priceofsale;
	console.log("purchase successful");
	
	}
else{console.log("insufficcient");}

}
console.log(bankbalance);
maketransaction(85);
console.log(bankbalance);
maketransaction(34);
console.log(bankbalance);
maketransaction(400);


















