/**
 * A collection of useful math function commonly required in 2D/3D games.
 *
 * @author Raheel Yawar <raheelyawar@gmail.com>
 *
 * @class MathUtility
 * @static
 * */

MathUtility = {
    lerp: function(v0, v1, t) {
        return ( (1-t)*v0 + t*v1 );
    },

    /**
     * @param {Object} v0 First coordinate in the form: {x: 0, y: 0}.
     * @param {Object} v1 First coordinate in the form: {x: 0, y: 0}.
     * @param {number} t The time.
     * */
    lerp2D: function (v0, v1, t) {
        return {x: ((1-t)*v0.x + t*v1.x), y: ((1-t)*v0.y + t*v1.y)};
    },

    /**
     * @param {Object} pos1 First coordinate in the form: {x: 0, y: 0}.
     * @param {Object} pos2 First coordinate in the form: {x: 0, y: 0}.
     * */
    getVector2Distance: function (pos1, pos2) {
        return Math.sqrt( ((pos2.y - pos1.y) * (pos2.y - pos1.y)) + ((pos2.x - pos1.x) * (pos2.x - pos1.x)) );
    },

    /**
     * @param {number} min Minimum inclusive integer.
     * @param {number} max Maximum inclusive integer.
     * */
    getRndIntInRange: function(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    },

    /**
     * @param {number} s The number to map.
     * @param {number} a1 From range min.
     * @param {number} a2 From range max.
     * @param {number} b1 To range min.
     * @param {number} b2 To range max.
     * */
    mapNumberToRange: function(s, a1, a2, b1, b2) {
        return b1 + (s-a1)*(b2-b1)/(a2-a1);
    },

    /**
     * @param {number} v The number to clamp
     * @param {number} min The minimum value of the range.
     * @param {number} max The maximum value of the range.
     * */
    clamp: function (v, min, max) {
        if (v < min)
        {
            return min;
        }
        else if (max < v)
        {
            return max;
        }
        else
        {
            return v;
        }
    },

    /**
     * @param {number} v The number to clamp.
     * @param {number} max The maximum allowed value.
     * */
    clampMax(v, max) {
        if (max < v) {
            return max;
        }

        return v;
    },

    /**
     * @param {number} v The number to clamp.
     * @param {number} min The minimum allowed value.
     * */
    clampMin(v, min) {
        if (v < min) {
            return min;
        }

        return v;
    },

    /**
     * @param {Array} array Resorts the array in a random order.
     * */
    shuffleArray: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    /**
     * @param {number} angle
     * */
    toDegrees: function (angle) {
        return angle * (180 / Math.PI);
    },

    /**
     * @param {number} angle
     * */
    toRadians: function (angle) {
        return angle * (Math.PI / 180);
    },

    /**
     * @param {number} number The number to check.
     * @param {number} min Start of the range.
     * @param {number} max End of the range.
     * */
    isInRange(number, min, max) {
        return !(number < min || number > max);
    },

    /**
     * @param {Object} point The point in the xy-plane.
     * @param {Object} circlePosition Center of circle in the xy-plane.
     * @param {number} circleRadius Radius of the circle.
     * */
    isPointInCircle(point, circlePosition, circleRadius) {
        const d = Math.sqrt((
            (circlePosition.x - point.x) * (circlePosition.x - point.x))
            + ((circlePosition.y - point.y) * (circlePosition.y - point.y)
            ));

        return d <= circleRadius;
    },

    /**
     * @param {Number} number The number to check.
     * */
    isEven(number) {
        return number % 2 === 0;
    },

    /**
     * @param {Object} coord1 A 2D coordinate {x, y}.
     * @param {Object} coord2 A 2D coordinate {x, y}.
     * */
    getEuclideanDistance2D(coord1, coord2) {
        return Math.sqrt(((coord1.x - coord2.x) * (coord1.x - coord2.x))
            + ((coord1.y - coord2.y) * (coord1.y - coord2.y)));
    }
};
