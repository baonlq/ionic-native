"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Globalization
 * @description
 * @usage
 * ```js
 * import {Globalization} from 'ionic-native';
 *
 *
 *
 * ```
 */
var Globalization = (function () {
    function Globalization() {
    }
    /**
     * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
     * @return {Promise<{value: string}>}
     */
    Globalization.getPreferredLanguage = function () { return; };
    /**
     * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
     * @return {Promise<{value: string}>}
     */
    Globalization.getLocaleName = function () { return; };
    /**
     * Converts date to string
     * @param date
     * @param options
     * @return {Promise<{value: string}>}
     */
    Globalization.dateToString = function (date, options) { return; };
    /**
     *
     * @param dateString
     * @param options
     */
    Globalization.stringToDate = function (dateString, options) { return; };
    /**
     *
     * @param options
     */
    Globalization.getDatePattern = function (options) { return; };
    /**
     *
     * @param options
     */
    Globalization.getDateNames = function (options) { return; };
    /**
     * Check if day light saving is active
     * @param date
     */
    Globalization.isDayLightSavingsTime = function (date) { return; };
    /**
     * Get first day of week
     */
    Globalization.getFirstDayOfWeek = function () { return; };
    /**
     *
     * @param options
     */
    Globalization.numberToString = function (options) { return; };
    /**
     *
     * @param stringToConvert
     * @param options
     */
    Globalization.stringToNumber = function (stringToConvert, options) { return; };
    /**
     *
     * @param options
     */
    Globalization.getNumberPattern = function (options) { return; };
    /**
     *
     * @param currencyCode
     */
    Globalization.getCurrencyPattern = function (currencyCode) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getPreferredLanguage", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getLocaleName", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "dateToString", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "stringToDate", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getDatePattern", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getDateNames", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "isDayLightSavingsTime", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getFirstDayOfWeek", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "numberToString", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "stringToNumber", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getNumberPattern", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getCurrencyPattern", null);
    Globalization = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-globalization',
            pluginRef: 'navigator.globalization',
            repo: 'https: //github.com/apache/cordova-plugin-globalization'
        })
    ], Globalization);
    return Globalization;
}());
exports.Globalization = Globalization;
//# sourceMappingURL=globalization.js.map