str => [...str.split(/\s+/)].filter(x => x != '').reduce((acc, x) => {
    let [f, s, n] = [...x.split(/\d+/).map(x => x.charCodeAt()).concat(+x.slice(1, -1))]
    f < 91 ? n /= f - 64 : n *= f - 96
    s < 91 ? n -= s - 64 : n += s - 96
    acc += n
    return acc
}, 0).toFixed(2)


//------------------------------------(2)----------------------------------

function lettersChangeNumbers(arg) {
    arg = arg.split(' ')
    arg = arg.filter(x => x != '')
    let sum = 0

    for (let el of arg) {
        el = el.split('')
        let fL = el.shift()
        let sL = el.pop()
        let num = Number(el.join(''))
        if (isUpper(fL)) {
            num /= getAlphabetPosition(fL)
        } else {
            num *= getAlphabetPosition(fL)
        }
        if (isUpper(sL)) {
            num -= getAlphabetPosition(sL)
        } else {
            num += getAlphabetPosition(sL)
        }

        sum += num
    }

    console.log(sum.toFixed(2))

    function getAlphabetPosition(letter) {
        letter = letter.toUpperCase();
        let code = letter.charCodeAt(0);
        return code - 64
    }

    function isUpper(letter) {
        let charCode = letter.charCodeAt(0);
        return (charCode >= 65 && charCode <= 90)
    }

    function isLower(letter) {
        let charCode = letter.charCodeAt(0);
        return (charCode >= 97 && charCode <= 122)
    }
}

// lettersChangeNumbers('A12b s17G')
// lettersChangeNumbers('P34562Z q2576f   H456z')
// lettersChangeNumbers('a1A')