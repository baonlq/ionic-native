"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Barcode Scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 * ```js
 * import {BarcodeScanner} from 'ionic-native';
 *
 *
 * BarcodeScanner.scan().then((barcodeData) => {
 *  // Success! Barcode data is here
 * }, (err) => {
 * 	// An error occurred
 * });
 * ```
 */
var BarcodeScanner = (function () {
    function BarcodeScanner() {
    }
    /**
     * Open the barcode scanner.
     * @return Returns a Promise that resolves with scanner data, or rejects with an error.
     */
    BarcodeScanner.scan = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], BarcodeScanner, "scan", null);
    BarcodeScanner = __decorate([
        plugin_1.Plugin({
            plugin: 'phonegap-plugin-barcodescanner',
            pluginRef: 'cordova.plugins.barcodeScanner',
            repo: 'https://github.com/phonegap/phonegap-plugin-barcodescanner',
            platforms: ['Android', 'iOS', 'Windows Phone 8', 'Windows 10', 'Windows 8', 'BlackBerry 10', 'Browser']
        })
    ], BarcodeScanner);
    return BarcodeScanner;
}());
exports.BarcodeScanner = BarcodeScanner;
//# sourceMappingURL=barcodescanner.js.map