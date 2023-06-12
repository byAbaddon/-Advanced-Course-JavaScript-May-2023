function systemsRegister(input) {
    let systems = {}

    for (line of input) {
        let [sys, component, name] = line.split(' | ')
        if (!systems[sys]) systems[sys] = {}
        if (!(systems[sys][component])) systems[sys][component] = []
        if (!(systems[sys][component].includes(name))) systems[sys][component].push(name)
    }

    let sortedRegister = Object.entries(systems).sort((a, b) => {
        if (Object.keys(b[1]).length - Object.keys(a[1]).length !== 0)
            return Object.keys(b[1]).length - Object.keys(a[1]).length
        return a[0].localeCompare(b[0])
    })

    sortedRegister.forEach((x, i) => {
        sortedRegister[i][1] = Object.entries(x[1]).sort((a, b) => b[1].length - a[1].length)
    })


    for (const [key, val] of sortedRegister) {
        console.log(key)
        for (const [_, k] of Object.entries(val)) {
            console.log(`|||${k[0]}`)
            k[1].forEach(el => console.log(`||||||${el}`))
        }
    }
}

// systemsRegister([
//   'SULS | Main Site | Home Page',
//   'SULS | Main Site | Login Page',
//   'SULS | Main Site | Register Page',
//   'SULS | Judge Site | Login Page',
//   'SULS | Judge Site | Submittion Page',
//   'Lambda | CoreA | A23',
//   'SULS | Digital Site | Login Page',
//   'Lambda | CoreB | B24',
//   'Lambda | CoreA | A24',
//   'Lambda | CoreA | A25',
//   'Lambda | CoreC | C4',
//   'Indice | Session | Default Storage',
//   'Indice | Session | Default Security'
// ])