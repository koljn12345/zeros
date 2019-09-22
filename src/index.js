module.exports = function zeros(expression) {
   let CountTwo=0;
   let CountFive=0;
   let mass=expression.split('*');
   for(let i=0;i<mass.length; i++) {
      if(mass[i].includes('!!')) {
         mass[i]=mass[i].replace('!!','');
         if (mass[i]%2==0) {
            CountTwo+=Summa(mass[i], 2);
            CountFive+=(mass[i]/10|0)+(Summa(mass[i], 50));
         }
         else {
            CountFive+=(Summa(mass[i], 5))-(mass[i]/10|0)-(Summa(mass[i], 50)); 
         }
      }
      else if(mass[i].includes('!')) {
         mass[i]=mass[i].replace('!','');
         CountTwo+=Summa(mass[i], 2);
         CountFive+=Summa(mass[i], 5);
      }
      else {
         CountTwo+=Summa(mass[i], 2);
         CountFive+=Summa(mass[i], 5);
      }
   }
return CountTwo>CountFive ? CountFive:CountTwo;
  // your solution
}

function Summa(numberT, base) {
let count=0;
while (numberT>0) {
            numberT = (numberT/base)|0;
            count += numberT;
         }
return count;
}



