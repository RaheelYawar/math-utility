/**
 * A collection of useful math function commonly required in 2D/3D games.
 * This is a ES6 version of the script
 *
 * @author Raheel Yawar <raheelyawar@gmail.com>
 *
 * @class MathUtility
 * */

/**
 * @static
 * @param {number} v The number to clamp
 * @param {number} min The minimum value of the range.
 * @param {number} max The maximum value of the range.
 * @returns {number}
 * */
function clamp(v, min, max) {
    if (v < min) {
        return min;
    } else if (max < v) {
        return max;
    }

    return v;
}