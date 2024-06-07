function reverseNumber(number) {
    
    let reversedString = String(number).split('').reverse().join('');
     //tukar nombor ke string, splitkan dia ke array character, reverse array, joinkan balik nombor kpd string
    
    //convert reverse string ke integer balik
    let reversedNumber = parseInt(reversedString);
    
    return reversedNumber;
}

