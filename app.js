const { askValidatedQuestion } = require('./io/input')
const { resetConfigs } = require('./utils/config')
const { isConvertibleToInt } = require('./utils/conversion')
const { drawLots } = require('./utils/draw')
const { rl } = require('./wrappers/readlineWrapper')

async function main() {
    try {
        const option = parseInt(await askValidatedQuestion(
            'Escolha uma opção:\n[1] - Resetar sistema\n[2] - Gerar calendário da semana\n',
            isConvertibleToInt,
            'Número inválido. Por favor, digite um número que preste.'
        ))

        switch (option) {
            case 1:
                resetConfigs()
                break;
            case 2:
                drawLots()
                break;
            default:
                break;
        }
    } finally {
        rl.close();
    }
}

main()