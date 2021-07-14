function writeCards(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
      newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}
  
function countDown(number){
    while(number > -1) {
        console.log(number--);
    }
  
}
