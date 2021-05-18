"use strict";

const path = require("path");

/**
 * Format different boolean values to boolean true.
 * @param {String} value
 * @returns {boolean}
 */
module.exports.toBooleanTrue = (value) => {
  return (
    !!value &&
    ((typeof value === "boolean" && value) ||
      (typeof value === "string" &&
        ["y", "true", "1"].includes(value.toLowerCase())))
  );
};

/**
 * Make application name based on the javascript file name running.
 * @param {String} [strip=.js] The extention to strip from the file name , defaults to .js
 * @returns {String}
 */
module.exports.scriptName = (strip = ".js") => {
  return path.basename(process.argv[1], strip);
};

/**
 * Utility method to remove file extension from filename.
 * @param {String} filename
 * @returns {String}
 */
module.exports.removeFileExtension = (filename) => {
    const regexp = /^(.+)(\.[^.]+)$/g;
    return regexp.exec(filename)[1];
};

/**
 * Formats an integer, in case of commander params being 2 arguments,
 * @type {function(*=): number}
 */
module.exports.commanderParseInteger = (str => parseInt(str, 10));

/**
 * Normalizing end of lines in a strings to eol character.
 * @param src
 * @param eol
 * @returns {String}
 */
module.exports.normalizeEOL = function (src, eol) {
    if (typeof src !== 'string') {
        throw new TypeError(`Invalid value received: expected a \`string\`, got \`${typeof str}\``);
    }
    if (typeof eol !== 'string') {
        throw new TypeError(`Invalid end of line value: expected a \`string\`, got \`${typeof eol}\``);
    }

    return src.replace(new RegExp('(\r\n|\n|\r)', 'g'), eol);
};