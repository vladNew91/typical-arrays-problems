const { underline } = require("colors");

exports.min = function min(array = []) {
    return array.reduce((a, b) => Math.min(a, b), 0);
};

exports.max = function max(array = []) {
    return array.reduce((a, b) => Math.max(a, b), 0);
};
exports.avg = function avg(array = []) {
    let ave = array.reduce((a, b) => a + b, 0);
    return ave / array.length || 0;
};
