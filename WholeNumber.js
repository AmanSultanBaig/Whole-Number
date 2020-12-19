function wholeNumber(n){
    if(!Number.isInteger(n)){
      console.log("not Whole Number")
    }else {
      console.log("Whole Number")
    }
}

wholeNumber(2345)


// another way to find whole number 

function testWholeNumber(number) {
    let result = (number - Math.floor(number)) !== 0;
    result ? console.log("Decimal Number") : console.log("Whole Number Found")
}

testWholeNumber(129.9)
