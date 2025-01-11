const { clothInstances, fileNames } = require('../def/instances')
const { saveToFile: save } = require('../io/output') 

function resetConfigs() {
    console.log('Resetando configurações...');

    clothInstances.flat().forEach(item => item.isAvailable = true)

    clothInstances.forEach((category, index) => save(fileNames[index], category))
}
module.exports = { resetConfigs }