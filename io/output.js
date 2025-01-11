require('dotenv').config()
const fs = require('fs')

/**
 * Saves data to a file in JSON format.
 * 
 * @param {string} filename - The name of the file where the data will be saved.
 * @param {Object} data - The data to be saved to the file.
 * 
 * @throws {Error} Throws an error if the file cannot be written.
 */
const saveToFile = (filename, data) => 
    fs.writeFileSync(`${process.env.FILE_PATH}${filename}.json`, JSON.stringify(data, null, 2))

module.exports = { saveToFile }