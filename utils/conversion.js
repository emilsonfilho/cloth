require('dotenv').config()
const fs = require('fs')
const { Cloth } = require('../def/cloth')

/**
 * Checks if a string can be converted to an integer.
 * 
 * @param {string} str - The string to be checked.
 * 
 * @returns {boolean} Returns `true` if the string can be successfully converted to an integer, otherwise `false`.
 */
function isConvertibleToInt(str) {
    const num = parseInt(str);
    return !isNaN(num) && String(num) === str.trim();
}

/**
 * Função que transforma os dados de um arquivo JSON em instâncias da classe `Cloth`.
 * 
 * A função lê um arquivo JSON localizado no diretório `./repo/` com o nome fornecido,
 * parseia o conteúdo do arquivo e mapeia cada item para uma nova instância da classe `Cloth`.
 * 
 * @param {string} filename - O nome do arquivo (sem a extensão `.json`) a ser lido.
 * 
 * @returns {Array<Cloth>} Um array de instâncias da classe `Cloth` criadas a partir dos dados do arquivo.
 * 
 * @throws {Error} Lança um erro se o arquivo não for encontrado ou se o conteúdo do arquivo não for válido.
 */
const transformToClothInstances = (filename) =>
    JSON.parse(fs.readFileSync(`${process.env.FILE_PATH}${filename}.json`, 'utf-8'))
        .map(item => new Cloth(item.id, item.name, item.isAvailable))

module.exports = { isConvertibleToInt, transformToClothInstances }