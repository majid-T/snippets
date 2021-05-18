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
 * Formats an integer, in case of commander params being 2 arguments,
 * @type {function(*=): number}
 */
module.exports.commanderParseInteger = (str => parseInt(str, 10));