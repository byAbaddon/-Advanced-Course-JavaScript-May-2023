function starEnigma(input) {
    input.shift()
    let counter = 0
    let decrypted = ''

    let attacked = []
    let destroyed = []
    for (let string of input) {
        for (let symbol of string) /[starSTAR]/.test(symbol) ? counter++ : null
        for (let symbol of string) {
            let newSymbol = String.fromCharCode(symbol.charCodeAt(0) - counter)
            decrypted += newSymbol
        }

        let pattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:[^@\-!:>]*?[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->/gm
        let result = pattern.exec(decrypted)

        while (result) {
            let planetName = result.groups['planetName']
            let attackType = result.groups['attackType']

            if (attackType === 'A') attacked.push(planetName)
            else destroyed.push(planetName) //'D'
            result = pattern.exec(decrypted)
        }

        counter = 0
        decrypted = ''
    }

    console.log(`Attacked planets: ${attacked.length}`)
    attacked.sort((a, b) => a.localeCompare(b)).forEach(elem => console.log(`-> ${elem}`))
    console.log(`Destroyed planets: ${destroyed.length}`)
    destroyed.sort((a, b) => a.localeCompare(b)).forEach(elem => console.log(`-> ${elem}`))
}
// starEnigma([2, 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])

//--------------------------------------(2)-------------------------------------------

function starEnigma(input) {
    input.shift()
    let counter = 0
    let decrypted = ''

    let attacked = []
    let destroyed = []
    for (let string of input) {
        for (let symbol of string) {
            symbol = symbol.toLowerCase();
            if (symbol === 's' || symbol === 't' || symbol === 'a' || symbol === 'r') {
                counter++
            }
        }

        for (let symbol of string) {
            let newSymbol = String.fromCharCode(symbol.charCodeAt(0) - counter)
            decrypted += newSymbol
        }

        let pattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:[^@\-!:>]*?(?<planetPopulation>[\d]+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>[\d]+)/gm;
        let result = pattern.exec(decrypted)
        
        while (result !== null) {
            let planetName = result.groups['planetName']
            let planetPopulation = Number(result.groups['planetPopulation'])
            let attackType = result.groups['attackType']
            let soldierCount = Number(result.groups['soldierCount'])

            if (attackType === 'A') {
                attacked.push(planetName)
            } else if (attackType === 'D') {
                destroyed.push(planetName)
            }

            result = pattern.exec(decrypted)
        }

        counter = 0
        decrypted = ''
    }
    console.log(`Attacked planets: ${attacked.length}`)
    attacked.sort((a, b) => a.localeCompare(b)).forEach(elem => console.log(`-> ${elem}`))
    console.log(`Destroyed planets: ${destroyed.length}`)
    destroyed.sort((a, b) => a.localeCompare(b)).forEach(elem => console.log(`-> ${elem}`))
}

// starEnigma([2, 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])