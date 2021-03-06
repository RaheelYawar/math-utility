/**
 * A collection of useful math function commonly required in 2D/3D games.
 * This is a ES6 version of the script
 *
 * @author Raheel Yawar <raheelyawar@gmail.com>
 *
 * @class MathUtility
 * @static
 * */
export default class MathUtility {
    /**
     * @param {number} v0 The start value.
     * @param {number} v1 The end value.
     * @param {number} t The delta step value.
     * @returns {number} The next step.
     * */
    static lerp(v0, v1, t) {
        return (((1 - t) * v0) + (t * v1));
    }

    /**
     * @param {Object} v0 First coordinate in the form: {x: 0, y: 0}.
     * @param {Object} v1 First coordinate in the form: {x: 0, y: 0}.
     * @param {number} t The time.
     * @returns {Object} The next step.
     * */
    static lerp2D(v0, v1, t) {
        return {x: (((1 - t) * v0.x) + (t * v1.x)), y: (((1 - t) * v0.y) + (t * v1.y))};
    }

    /**
     * @param {Object} pos1 First coordinate in the form: {x: 0, y: 0}.
     * @param {Object} pos2 First coordinate in the form: {x: 0, y: 0}.
     * @returns {Object} The euclidean distance.
     * */
    static getVector2Distance(pos1, pos2) {
        return Math.sqrt(((pos2.y - pos1.y) * (pos2.y - pos1.y)) + ((
            pos2.x - pos1.x) * (pos2.x - pos1.x)));
    }

    /**
     * @param {number} min Minimum inclusive integer.
     * @param {number} max Maximum inclusive integer.
     * @returns {number} A random integer in range.
     * */
    static getRndInt(min, max) {
        return Math.floor((Math.random() * ((max - min) + 1)) + min);
    }

    /**
     * @param {number} min Minimum inclusive float.
     * @param {number} max Maximum inclusive float.
     * @returns {number} A random float in range.
     * */
    static getRndFloat(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * @param {number} s The number to map.
     * @param {number} f1 From range min.
     * @param {number} f2 From range max.
     * @param {number} t1 To range min.
     * @param {number} t2 To range max.
     * @returns {Object} The new number mapped to the range.
     * */
    static mapNumberToRange(s, f1, f2, t1, t2) {
        const slope = ((t2 - t1) / (f2 - f1));
        return t1 + slope * (s - f1);
    }

    /**
     * @param {number} v The number to clamp
     * @param {number} min The minimum value of the range.
     * @param {number} max The maximum value of the range.
     * @returns {number} The clamped number.
     * */
    static clamp(v, min, max) {
        if (v < min) {
            return min;
        } else if (max < v) {
            return max;
        }

        return v;
    }

    /**
     * @param {number} v The number to clamp.
     * @param {number} max The maximum allowed value.
     * */
    static clampMax(v, max) {
        if (max < v) {
            return max;
        }

        return v;
    }

    /**
     * @param {number} v The number to clamp.
     * @param {number} min The minimum allowed value.
     * */
    static clampMin(v, min) {
        if (v < min) {
            return min;
        }

        return v;
    }

    /**
     * @param {Array} array Resorts the array in a random order.
     * */
    static shuffleArray(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        const arrayClone = array;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = arrayClone[currentIndex];
            arrayClone[currentIndex] = arrayClone[randomIndex];
            arrayClone[randomIndex] = temporaryValue;
        }

        return array;
    }

    /**
     * Bubble-sort an array of numbers.
     *
     * @param {Array} items
     * */
    static getBubbleSortedArray(items) {
        const length = items.length;
        for (let i = 0; i < length; i++) { // Number of passes
            for (let j = 0; j < (length - i - 1); j++) { // Notice that j < (length - i)
                // Compare the adjacent positions
                if (items[j] > items[j + 1]) {
                    // Swap the numbers
                    const tmp = items[j];
                    items[j] = items[j + 1]; // Replace current number with adjacent number
                    items[j + 1] = tmp; // Replace adjacent number with current number
                }
            }
        }

        return items;
    }

    /**
     * Sorts an array in ascending order and puts secondary arrays
     * in the same order.
     *
     * @param {Array} primary
     * @param {Array} secondaries A 2D array with all secondary arrays to sort at each index.
     * @returns {Object} The input arrays are returned, all sorted in ascending order.
     * */
    static sortMultipleArrays(primary, secondaries) {
        const length = primary.length;
        for (let i = 0; i < length; i++) { // Number of passes
            for (let j = 0; j < (length - i - 1); j++) { // Notice that j < (length - i)
                // Compare the adjacent positions
                if (primary[j] > primary[j + 1]) {
                    // Swap the numbers
                    const tmp = primary[j];
                    primary[j] = primary[j + 1]; // Replace current number with adjacent number
                    primary[j + 1] = tmp; // Replace adjacent number with current number

                    for (let k = 0; k < secondaries.length; k++) {
                        const array = secondaries[k];

                        const temp = array[j];
                        array[j] = array[j + 1]; // Replace current number with adjacent number
                        array[j + 1] = temp; // Replace adjacent number with current number
                    }// end of for k
                }// end of if
            }// end of for j
        }// end of for i

        return {primary, secondaries};
    }

    /**
     * Search an element in a 1D array linearly and return the index if found.
     *
     * @param {number} value The number to search.
     * @param {Array} array The array to search in.
     * @returns {number} The index if value found. -1 if not found.
     * */
    static searchArrayLinearly(value, array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }// end of for i

        return -1;
    }

    /**
     * @param {number} angle
     * */
    static toDegrees(angle) {
        return angle * (180 / Math.PI);
    }

    /**
     * @param {number} angle
     * */
    static toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    /**
     * @param {Object} point The point in the xy-plane.
     * @param {Object} circlePosition Center of circle in the xy-plane.
     * @param {number} circleRadius Radius of the circle.
     * */
    static isPointInCircle(point, circlePosition, circleRadius) {
        const d = Math.sqrt((
            (circlePosition.x - point.x) * (circlePosition.x - point.x))
            + ((circlePosition.y - point.y) * (circlePosition.y - point.y)
            ));

        return d <= circleRadius;
    }

    /**
     * @param {Number} number The number to check.
     * */
    static isEven(number) {
        return number % 2 === 0;
    }

    /**
     * @param {Object} coord1 A 2D coordinate {x, y}.
     * @param {Object} coord2 A 2D coordinate {x, y}.
     * */
    static getEuclideanDistance2D(coord1, coord2) {
        return Math.sqrt(((coord1.x - coord2.x) * (coord1.x - coord2.x))
            + ((coord1.y - coord2.y) * (coord1.y - coord2.y)));
    }

    /**
     * Convert the 1D array index to a 2D index.
     *
     * @param {Number} index
     * @param {Number} arrayLength
     * @return {Object} The (x, y) index.
     * */
    static get2dIndexVia1d(index, arrayLength) {
        return {x: index / arrayLength, y: index % arrayLength};
    }

    /**
     * Format a numerical time into a string minutes and seconds division.
     * @param {Number} t Time in seconds.
     * */
    static getMMSS(t) {
        if (t <= 0) {
            return "00:00";
        }
        let minutes = Math.floor(t / 60);
        let seconds = Math.floor(t - minutes * 60);

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    /**
     * Format a numerical time into a string hours, minutes and seconds division.
     * @param {Number} t Time in seconds.
     * */
    static getHHMMSS(t) {
        let hours = Math.floor(t / 3600);
        if (hours <= 0) {
            return this.getMMSS(t);
        }

        let minutes = Math.floor((t - (hours * 3600)) / 60);
        let seconds = Math.floor(t - (hours * 3600) - (minutes * 60));

        if (hours < 10) { hours = `0${hours}`; }
        if (minutes < 10) { minutes = `0${minutes}`; }
        if (seconds < 10) { seconds = `0${seconds}`; }
        return `${hours}:${minutes}:${seconds}`;
    }

    /**
     * Get the direction vector using two 2D vectors.
     * @param {Object} p1 The 2D start vector.
     * @param {Object} p2 The end vector.
     * */
    static computeDirection2D(p1, p2) {
        const v = {x: p2.x, y: p2.y};
        v.x -= p1.x;
        v.y -= p1.y;
        const mag = this.computeMagnitude2D(v);
        v.x /= mag;
        v.y /= mag;

        return v;
    }

    /**
     * Get the magnitude of a 2D vector.
     * @param {Object} p The 2D vector.
     * */
    static computeMagnitude2D(p) {
        return Math.sqrt((p.x * p.x) + (p.y * p.y));
    }
}
