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
