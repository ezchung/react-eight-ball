
/**
 * Operation to get random number between 0 and number in params
 * @param {Number} max
 * @returns {integer}
 */
function getRandom(max){
    return Math.floor(Math.random() * max);
}

export { getRandom }