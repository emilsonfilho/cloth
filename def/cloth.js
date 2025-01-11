/**
 * Represents a clothing item.
 */
class Cloth {
    /**
     * Creates a new clothing item.
     * @param {number} id - The unique identifier of the clothing item.
     * @param {string} name - The name of the clothing item.
     * @param {boolean} isAvailable - Indicates whether the item is available.
     */
    constructor(id, name, isAvailable) {
        this.id = id;
        this.name = name;
        this.isAvailable = isAvailable;
    }

    /**
     * Toggles the availability status of the clothing item.
     * If it is available, it will become unavailable, and vice versa.
     */
    handleAvailability() {
        this.isAvailable = !this.isAvailable;
    }

    /**
     * Displays the name of the clothing item in the console.
     */
    show() {
        console.log(this.name);
    }
}

module.exports = { Cloth }