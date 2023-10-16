exports.action = function(data){


var temp=data.controle.split(',')
var date2=new Date(temp[2]+','+temp[1]+','+temp[0])
var date1 = new Date()

var diff = new Date(date2.getTime() - date1.getTime());

var years = diff.getUTCFullYear() - 1970; // Gives difference as year
var months = diff.getUTCMonth(); // Gives month count of difference
var days = diff.getUTCDate()-1; // Gives day count of difference

console.log("remaining time = " + years + " years, " + months + " months, " + days + " days.");

}