"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var PusherInit = (function () {
    function PusherInit() {
    }
    PusherInit.getCurrentInstallation = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], PusherInit, "getCurrentInstallation", null);
    PusherInit = __decorate([
        plugin_1.Plugin({
            plugin: 'com.thlsoft.sbox.notificationpusher',
            platforms: ['Android'],
            pluginRef: 'pusher'
        })
    ], PusherInit);
    return PusherInit;
}());
exports.PusherInit = PusherInit;
//# sourceMappingURL=pushnotification.js.map