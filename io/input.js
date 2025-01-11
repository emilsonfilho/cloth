const { rl } = require('../wrappers/readlineWrapper')

/**
 * @function askValidatedQuestion
 * @description Prompts the user with a question in the terminal and validates the response using a provided validation function. 
 * If the response is invalid, it displays an error message and repeats the question until a valid response is given.
 * 
 * @param {string} question - The question to display to the user in the terminal.
 * @param {function} validator - A function that validates the user's response. 
 * It should return `true` for valid responses and `false` for invalid ones.
 * @param {string} errorMessage - The error message displayed to the user when the response is invalid.
 * 
 * @returns {Promise<string>} A Promise that resolves with the user's valid response.
 */
function askValidatedQuestion(question, validator, errorMessage) {
    return new Promise(resolve => {
        const ask = () => {
            rl.question(question, (answer) => {
                if (validator(answer)) {
                    resolve(answer)
                } else {
                    console.log(errorMessage);
                    ask()
                }
            })
        }
        ask()
    })
}

module.exports = { askValidatedQuestion }