const { transformToClothInstances } = require('../utils/conversion')

const fileNames = ['blouses', 'bracelets', 'perfums', 'rings', 'shorts'];

/**
 * Reads multiple JSON files and transforms them into instances of the `Cloth` class.
 * 
 * @param {Array<string>} fileNames - An array of strings containing the paths of the JSON files to be read.
 * 
 * @returns {Array<Cloth[]>} An array of arrays, where each array contains instances of the `Cloth` class
 *                           created from the data of each JSON file.
 * 
 * @throws {Error} Throws an error if any of the files are not found or if the content of any file
 *                 is not valid for conversion.
 */

const clothInstances = fileNames.map(transformToClothInstances);
const [blouses, bracelets, perfums, rings, shorts] = clothInstances;

module.exports = { clothInstances, blouses, bracelets, perfums, rings, shorts, fileNames }