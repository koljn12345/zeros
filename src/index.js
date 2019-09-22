module.exports = function zeros(expression) {
CountTwo=0;
CountFive=0;
 let mass=expression.split('*');
console.log(mass);
for(i=0;i<mass.length; i++) {
if(mass[i].includes('!!')) {
mass[i]=mass[i].replace('!!','');
if (mass[i]%2==0) {
CountTwo+=Summa(mass[i], 2);
CountFive+=(mass[i]/10|0)+((mass[i]/10)/5)|0;

console.log('mass[i]= '+ mass[i]+' CountTwo= '+CountTwo+' CountFive= '+CountFive);
}
else {     CountFive+=(Summa(mass[i], 5))-(mass[i]/10|0)-(((mass[i]/10)/5)|0); 
console.log('mass[i]= '+ mass[i]+' CountFive= '+CountFive);}
}
else if(mass[i].includes('!')) {
mass[i]=mass[i].replace('!','');
CountTwo+=Summa(mass[i], 2);
CountFive+=Summa(mass[i], 5);
console.log('mass[i]= '+ mass[i]+' CountTwo= '+CountTwo+' CountFive= '+CountFive);
}
else {
console.log('.');
CountTwo+=mass[i]/2|0;
CountFive+=mass[i]/5|0;
console.log('mass[i]= '+ mass[i]+' CountTwo= '+CountTwo+' CountFive= '+CountFive);
}
}
console.log(CountTwo>CountFive ? CountFive:CountTwo);
return CountTwo>CountFive ? CountFive:CountTwo;
  // your solution
}

function Summa(numberT, base)
{
count=0;
while (numberT>0) {
            numberT = (numberT/base)|0;
            count += numberT;
         }
return count;
}



