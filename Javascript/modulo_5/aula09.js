console.log('Conversor de Bases:');

function baseConverter(decNumber, base) {
    var resStack = [], rest, baseString = '', digits = '0123456789ABCDEF'

    while(decNumber > 0) {
        rest = Math.floor(decNumber % base)
        resStack.push(rest)
        decNumber = Math.floor(decNumber / base)
    }

    while(resStack.length > 0) {
        baseString += digits[resStack.pop()]
    }

    return baseString;
}

console.log(baseConverter(123,16))