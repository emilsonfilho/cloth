const { Weekdays } = require('./def/weekdays')
const { askValidatedQuestion } = require('./io/input')
const { saveToFile } = require('./io/output')
const { resetConfigs } = require('./utils/config')
const { isConvertibleToInt, transformToClothInstances } = require('./utils/conversion')
const { getRandomElement } = require('./utils/random')
const { rl } = require('./wrappers/readlineWrapper')

// for (const key in WeekDays) {
//     const day = WeekDays[key]
//     console.log(`Roupa de ${day}:`)

//     const blouse = getRandomElement(blouses)
//     const bracelet = getRandomElement(bracelets)
//     const perfum = getRandomElement(perfums)
//     const ring = getRandomElement(rings)
//     const short = getRandomElement(shorts)

//     blouse.show()
//     bracelet.show()
//     perfum.show()
//     ring.show()
//     short.show()

//     console.log('--------------------')

//     // Modifying in arrays
//     const updateBlouse = blouses.find(item => item.id === blouse.id)
//     const updateShort = shorts.find(item => item.id === short.id)

//     updateBlouse.handleAvailability()
//     updateShort.handleAvailability()
// }

// saveToFile('blouses.json', blouses);
// saveToFile('bracelets.json', bracelets);
// saveToFile('perfums.json', perfums);
// saveToFile('rings.json', rings);
// saveToFile('shorts.json', shorts);

async function main() {
    try {
        const option = parseInt(await askValidatedQuestion(
            'Escolha uma opção:\n[1] - Resetar sistema\n',
            isConvertibleToInt,
            'Número inválido. Por favor, digite um número que preste.'
        ))

        switch (option) {
            case option: 1
                resetConfigs()
                break;
        
            default:
                break;
        }
    } finally {
        rl.close();
    }
}

main()