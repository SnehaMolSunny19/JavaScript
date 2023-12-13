const totalMaterial=1000;
const perdayStock=13;
const lastRefill=new Date("2023-10-23");
var soldOutDate = finishDay(lastRefill, totalMaterial, perdayStock);

function finishDay(lastRefill,totalMaterial,perdayStock){
    let currentDay = new Date(lastRefill);
    let soldOutDate ;

    while(totalMaterial>0){
        if(currentDay.getDay() >=1 && currentDay.getDay()<=5){
            totalMaterial=totalMaterial - perdayStock;
        }
        currentDay.setDate(currentDay.getDate() + 1);
       
    }
    if(totalMaterial<=0){
         soldOutDate= new Date(currentDay);
    }
    return soldOutDate;
}
function refillDay(){
    let refillDate = new Date(soldOutDate);
    let refillAmount;
    for(let i=0;i<7;i++){
        if(refillDate.getDay()!=0 && refillDate.getDay()!=6){
            refillDate.setDate(refillDate.getDate() - 1);
        }
        
    }
    const timeDifference=(refillDate-new Date(lastRefill))/(1000*24*60*60);
    refillAmount=Math.floor((timeDifference-(2*(timeDifference/7)))*perdayStock);
    console.log("Number of refills:" + refillAmount) ;
    return refillDate;


}

var refill=refillDay();
console.log(`Date of refill: ${refill.toISOString().split('T')[0]}`);
console.log(`Date of selling out products:${soldOutDate.toISOString().split('T')[0]}`);

