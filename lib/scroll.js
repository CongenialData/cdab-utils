"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Check if the target is an HTMLElement or not
 *
 * @param target Target to check if it is an HTMLElement or not
 * @returns Return true if target is element, otherwise false
 *
 */
var isElement = function (target) { return target instanceof HTMLElement; };
function scrollTo(target, options) {
    /** Specifies the number of pixels along the X axis to scroll the window or element. */
    var xTarget;
    /** Specifies the number of pixels along the Y axis to scroll the window or element. */
    var yTarget;
    var defaultOptions = {
        behavior: 'smooth',
        xOffset: 0,
        yOffset: 0,
    };
    if (isElement(target)) {
        var offsetLeft = target.offsetLeft, offsetTop = target.offsetTop;
        xTarget = offsetLeft;
        yTarget = offsetTop;
    }
    else {
        xTarget = target.left;
        yTarget = target.top;
    }
    var _a = tslib_1.__assign(tslib_1.__assign({}, defaultOptions), options), xOffset = _a.xOffset, yOffset = _a.yOffset, behavior = _a.behavior;
    var left = xTarget + xOffset;
    var top = yTarget + (yOffset || 0);
    window.scrollTo({ left: left, top: top, behavior: behavior });
}
exports.scrollTo = scrollTo;
