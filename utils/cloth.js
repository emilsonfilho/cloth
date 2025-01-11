const { getRandomElement } = require("./random")

/**
 * Updates the availability status of a specific clothing item in the array.
 *
 * - Searches for the clothing item in the array by its `id`.
 * - Once found, it calls the `handleAvailability` method on that item to update its availability.
 *
 * @param {Array<Cloth>} array - The array of clothing items.
 * @param {Cloth} element - The clothing item whose availability needs to be updated.
 */
function handleClothAvailability(array, element) {
    array.find(item => item.id === element.id).handleAvailability()
}

/**
 * Handles a random item from a category.
 *
 * @param {Array} category - The category array from which a random item will be selected.
 * @param {boolean} [changeAvailability=true] - Whether to update the clothing availability. Defaults to `true`.
 * @returns {Object} The random item selected.
 */
function handleRandomItem(category, changeAvailability = true) {
    const random = getRandomElement(category)
    random.show()

    if (changeAvailability) handleClothAvailability(category, random)

    return random
}


module.exports = { handleClothAvailability, handleRandomItem }