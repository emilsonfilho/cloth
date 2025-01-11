const { clothInstances, fileNames } = require('../def/instances')
const { saveToFile: save } = require('../io/output') 

/**
 * Resets the configurations for the clothing items and saves the changes.
 *
 * @function resetConfigs
 */
function resetConfigs() {
    console.log('Resetando configurações...');

    clothInstances.flat().forEach(item => item.isAvailable = true)
    clothInstances.forEach((category, index) => save(fileNames[index], category))

    console.log('Alterações salvas com sucesso!');
}

module.exports = { resetConfigs }