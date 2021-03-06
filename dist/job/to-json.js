"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJson = void 0;
/**
 * Given a job, turn it into an object we can store in Mongo
 * @name Job#toJSON
 * @function
 * @returns json object from Job
 */
var toJson = function () {
    var attrs = this.attrs || {};
    var result = {};
    for (var prop in attrs) {
        if ({}.hasOwnProperty.call(attrs, prop)) {
            // @ts-expect-error index signature missing
            result[prop] = attrs[prop];
        }
    }
    var dates = [
        "lastRunAt",
        "lastFinishedAt",
        "nextRunAt",
        "failedAt",
        "lockedAt",
    ];
    dates.forEach(function (d) {
        // @ts-expect-error index signature missing
        if (result[d]) {
            // @ts-expect-error index signature missing
            result[d] = new Date(result[d]);
        }
    });
    return result;
};
exports.toJson = toJson;
//# sourceMappingURL=to-json.js.map