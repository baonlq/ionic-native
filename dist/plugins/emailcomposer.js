"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/katzer/cordova-plugin-email-composer).
 *
 * @usage
 * ```ts
 * import {EmailComposer} from 'ionic-native';
 *
 *
 * EmailComposer.isAvailable().then((available) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * EmailComposer.send(email);
 *
 * ```
 */
var EmailComposer = (function () {
    function EmailComposer() {
    }
    /**
     * Verifies if sending emails is supported on the device.
     *
     * @param app {string?} An optional app id or uri scheme. Defaults to mailto.
     * @param scope {any?} An optional scope for the promise
     * @returns {Promise<boolean>} Resolves promise with boolean whether EmailComposer is available
     */
    EmailComposer.isAvailable = function (app, scope) {
        return new Promise(function (resolve, reject) {
            cordova.plugins.email.isAvailable(app, resolve, scope);
        });
    };
    /**
     * Adds a new mail app alias.
     *
     * @param alias {string} The alias name
     * @param packageName {string} The package name
     */
    EmailComposer.addAlias = function (alias, packageName) { };
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param email {Email} Email
     * @param scope {any?} An optional scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    EmailComposer.open = function (email, scope) { return; };
    __decorate([
        plugin_1.Cordova()
    ], EmailComposer, "addAlias", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 3
        })
    ], EmailComposer, "open", null);
    EmailComposer = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-email-composer',
            pluginRef: 'cordova.plugins.email',
            repo: 'https://github.com/katzer/cordova-plugin-email-composer.git',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], EmailComposer);
    return EmailComposer;
}());
exports.EmailComposer = EmailComposer;
//# sourceMappingURL=emailcomposer.js.map