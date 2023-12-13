// const stringReverse=function(myString){
//     const arr = myString.split('.');
//     const reversedArray=arr.reverse();
//     const firstrevstring=reversedArray.join('.')
//     console.log(firstrevstring);
//     const strings=firstrevstring.split(' ');
//     const reversedfinal=strings.map(word=>word.split('').reverse().join(''));
//     const reversedtext=reversedfinal.join(' ');
//     return reversedtext;
// }
const stringReverse=function(myString){
    const arr = myString.split('.');
    const reversedArray=arr.reverse();
    const firstrevstring=reversedArray.join(' . ')
    console.log(firstrevstring);
    const reversedfinal=reversed(firstrevstring);
    function reversed(firstrevstring){
        const strings=firstrevstring.split(' ');
        let reversedfinal=strings.map(word=>word.split('').reverse().join(''));
        return reversedfinal;
    }
    const reversedtext= reversedfinal.join(' ');
    return reversedtext;
}


const myString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
const OutputArray=stringReverse(myString);
console.log(myString);
console.log(OutputArray);
document.write(OutputArray);



  

    
