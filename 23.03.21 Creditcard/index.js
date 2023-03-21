function validateCreditCard(creditCardNum) {
    const result = {valid:true, number:creditCardNum};
    const ccNumNoDash = creditCardNum.split("-").join("");
    
    if(ccNumNoDash.length !== 16) {
        result.valid = false;
        result.error = "not 16 digits";
        return result;
    };    

    let ccNumArray = creditCardNum.split("-");
    for (item of ccNumArray) {
        if(isNaN(item)) {
            result.valid = false;
            result.error = "invalid characters"
        }
    };

    let twoDifferentNum = false;
    for (let i=1; i<ccNumArray.length; i++) {
        if(ccNumArray[i] !== ccNumArray[i-1]) {
            twoDifferentNum = true;
            break;   
        } 
    };
    if(twoDifferentNum === false) {
        result.valid = false;
        result.error = "need more than 1 unique digit";
        return result;
    };

    if(ccNumArray[ccNumArray.length - 1] % 2 !== 0) {
        result.valid = false;
        result.error = "the last digit is odd";
        return result; 
    }
    return result;
};

/**** tests *****/

console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }

console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }

console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false, number: 'a923-3211-9c01-1112', error: 'invalid characters' }

console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false, number: '4444-4444-4444-4444', error: 'need more than 1 unique digit' }

console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }
 
console.log(validateCreditCard('1211-1111-1111-1113')); //{valid: false,number: '1211-1111-1111-1113',error: 'the last digit is odd'}


