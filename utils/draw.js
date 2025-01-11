const { Cloth } = require('../def/cloth');
const { blouses, shorts, perfums, bracelets, rings } = require('../def/instances');
const { WeekDays } = require('../def/weekdays');
const { saveToFile: save } = require('../io/output');
const { handleRandomItem } = require('./cloth');

/**
 * Generates a clothing calendar for the week.
 *
 * @function drawLots
 */
function drawLots() {
    console.log('Gerando o calendário de roupas...');

    let shortDrawingActive = true;
    let lastShortDrawed = new Cloth();
    for (const key in WeekDays) {
        console.log('--------------------------------');        
        console.log(`Roupa de ${WeekDays[key]}:`);

        handleRandomItem(blouses)

        if (shortDrawingActive) {
            lastShortDrawed = handleRandomItem(shorts)
        } else {
            lastShortDrawed.show()
        }

        shortDrawingActive = !shortDrawingActive

        handleRandomItem(perfums, false)
        handleRandomItem(bracelets, false)
        handleRandomItem(rings, false)
        // [perfums, bracelets, rings].forEach(category => handleRandomItem(category, false)); DON'T WORK
        console.log('--------------------------------');
    }

    [blouses, shorts].forEach((category, index) => {
        const filenames = ['blouses', 'shorts']
        save(filenames[index], category)
    })

    console.log('Calendário de roupas concluído!');
}

module.exports = { drawLots }