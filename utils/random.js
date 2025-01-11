/**
 * Returns a random index from the given array.
 * 
 * @param {Array} array - The array from which to select a random index.
 * 
 * @returns {number} A random index within the bounds of the array.
 */
const getRandomIndex = (array) => Math.floor(Math.random() * array.length)

/**
 * Returns a random element from the array where the `isAvailable` property is `true`.
 * The function keeps trying until it finds an element with `isAvailable: true`.
 * 
 * @param {Array} array - The array from which to select a random element.
 * 
 * @returns {Object} A random element from the array that has `isAvailable: true`.
 */
function getRandomElement(array) {
    let element;

    // Continua tentando até encontrar um item com isAvailable: true
    do {
        element = array[getRandomIndex(array)];
    } while (!element.isAvailable); // Repete enquanto isAvailable for false

    return element;
}

module.exports = { getRandomIndex, getRandomElement }