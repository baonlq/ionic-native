"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var plugin_2 = require('./plugin');
/**
 * @name Google Maps
 */
var GoogleMaps = (function () {
    function GoogleMaps(elementId) {
        this._objectInstance = plugin.google.maps.Map.getMap(document.getElementById(elementId));
    }
    GoogleMaps.onInit = function () { return; };
    GoogleMaps.prototype.setDebuggable = function (isDebuggable) { };
    GoogleMaps.prototype.setClickable = function (isClickable) { };
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMaps.prototype, "setDebuggable", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'plugin.google.maps.event.MAP_READY'
        })
    ], GoogleMaps, "onInit", null);
    GoogleMaps = __decorate([
        plugin_1.Plugin({
            pluginRef: 'plugin.google.maps',
            plugin: 'cordova-plugin-googlemaps',
            repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps'
        })
    ], GoogleMaps);
    return GoogleMaps;
}());
exports.GoogleMaps = GoogleMaps;
//# sourceMappingURL=googlemaps.js.map