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
    static lerp(v0, v1, t) {
        return (((1 - t) * v0) + (t * v1));
    }

    /**
     * @param {Object} v0 First coordinate in the form: {x: 0, y: 0}.
     * @param {Object} v1 First coordinate in the form: {x: 0, y: 0}.
     * @param {number} t The time.
     * */
    static lerp2D(v0, v1, t) {
        return {x: (((1 - t) * v0.x) + (t * v1.x)), y: (((1 - t) * v0.y) + (t * v1.y))};
    }

    /**
     * @param {Object} pos1 First coordinate in the form: {x: 0, y: 0}.
     * @param {Object} pos2 First coordinate in the form: {x: 0, y: 0}.
     * */
    static getVector2Distance(pos1, pos2) {
        return Math.sqrt(((pos2.y - pos1.y) * (pos2.y - pos1.y)) + ((
            pos2.x - pos1.x) * (pos2.x - pos1.x)));
    }

    /**
     * @param {number} min Minimum inclusive integer.
     * @param {number} max Maximum inclusive integer.
     * */
    static getRndIntInRange(min, max) {
        return Math.floor((Math.random() * ((max - min) + 1)) + min);
    }

    /**
     * @param {number} s The number to map.
     * @param {number} f1 From range min.
     * @param {number} f2 From range max.
     * @param {number} t1 To range min.
     * @param {number} t2 To range max.
     * */
    static mapNumberToRange(s, f1, f2, t1, t2) {
        return (t1 + (s - f1)) * ((t2 - t1) / (f2 - f1));
    }

    /**
     * @param {number} v The number to clamp
     * @param {number} min The minimum value of the range.
     * @param {number} max The maximum value of the range.
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
}
