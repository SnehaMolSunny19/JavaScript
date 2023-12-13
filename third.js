const totalMaterial=1000;
const perdayStock=13;
const lastRefill=new Date("2023-10-23");

function finishDay(lastRefill,totalMaterial,perdayStock){
    let currentDay = new Date(lastRefill);
    let soldOutDate = null;

    while(totalMaterial>0){
        if(currentDay.getDay() >=1 && currentDay.getDay()<5){
            totalMaterial=totalMaterial - perdayStock;
            currentDay.setDate(currentDay.getDate() + 1);
        }
        else{
            currentDay.setDate(currentDay.getDate() + 1);
        }
    }
    if(totalMaterial<=0){
         soldOutDate= new Date(currentDay);
    }
    return soldOutDate;
}

function refillAmount(lastRefill,totalMaterial, perdayStock,soldOutDate){
    let remaining_materials= null;
    let purchase= null;
    remaining_materials= totalMaterial-((soldOutDate-new Date(lastRefill)*perdayStock)/(1000*60*60*24));
    purchase=totalMaterial-remaining_materials;
    return purchase;

}

const materialsToPurchase = refillAmount(lastRefill, totalMaterial, perdayStock, soldOutDate);
console.log(materialsToPurchase );
var soldOutDate = finishDay(lastRefill, totalMaterial, perdayStock);
console.log(`The shop will be sold out on: ${soldOutDate.toISOString().split('T')[0]}`);
console.log(soldOutDate);
