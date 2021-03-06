"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name MediaPlugin
 * @description
 * @usage
 * ```ts
 * import {MediaPlugin} from 'ionic-native';
 *
 *
 * ...
 *
 *
 * // Playing a file
 * var file = new MediaPlugin("path/to/file.mp3");
 *
 * // play the file
 * file.play();
 *
 * // skip to 10 seconds
 * file.seekTo(10000);
 *
 * // stop plying the file
 * file.stop();
 *
 *
 * ...
 *
 * // Recording to a file
 * var newFile = new MediaPlugin("path/to/file.mp3");
 * newFile.startRecord();
 *
 * newFile.stopRecord();
 *
 *
 *
 * ```
 */
var MediaPlugin = (function () {
    // Methods
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     */
    function MediaPlugin(src) {
        // TODO handle success, error, and status
        this._objectInstance = new Media(src);
    }
    /**
     * Returns the current amplitude of the current recording.
     */
    MediaPlugin.prototype.getCurrentAmplitude = function () { return; };
    /**
     * Returns the current position within an audio file. Also updates the Media object's position parameter.
     */
    MediaPlugin.prototype.getCurrentPosition = function () { return; };
    /**
     * Returns the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     */
    MediaPlugin.prototype.getDuration = function () { return; };
    /**
     * Starts or resumes playing an audio file.
     */
    MediaPlugin.prototype.play = function (iosOptions) { };
    /**
     * Pauses playing an audio file.
     */
    MediaPlugin.prototype.pause = function () { };
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    MediaPlugin.prototype.release = function () { };
    /**
     * Sets the current position within an audio file.
     * @param milliseconds
     */
    MediaPlugin.prototype.seekTo = function (milliseconds) { };
    /**
     * Set the volume for an audio file.
     * @param volume The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    MediaPlugin.prototype.setVolume = function (volume) { };
    /**
     * Starts recording an audio file.
     */
    MediaPlugin.prototype.startRecord = function () { };
    /**
     * Stops recording
     */
    MediaPlugin.prototype.stopRecord = function () { };
    /**
     * Stops playing an audio file.
     */
    MediaPlugin.prototype.stop = function () { };
    // Constants
    MediaPlugin.MEDIA_NONE = 0;
    MediaPlugin.MEDIA_STARTING = 1;
    MediaPlugin.MEDIA_RUNNING = 2;
    MediaPlugin.MEDIA_PAUSED = 3;
    MediaPlugin.MEDIA_STOPPED = 4;
    __decorate([
        plugin_1.CordovaInstance()
    ], MediaPlugin.prototype, "getCurrentAmplitude", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], MediaPlugin.prototype, "getCurrentPosition", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "getDuration", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "play", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "pause", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "release", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "seekTo", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "setVolume", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "startRecord", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "stopRecord", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "stop", null);
    MediaPlugin = __decorate([
        plugin_1.Plugin({
            repo: 'https://github.com/apache/cordova-plugin-media',
            plugin: 'cordova-plugin-media',
            pluginRef: 'Media'
        })
    ], MediaPlugin);
    return MediaPlugin;
}());
exports.MediaPlugin = MediaPlugin;
var MediaError = (function () {
    function MediaError() {
    }
    Object.defineProperty(MediaError, "MEDIA_ERR_ABORTED", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaError, "MEDIA_ERR_NETWORK", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaError, "MEDIA_ERR_DECODE", {
        get: function () { return 3; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaError, "MEDIA_ERR_NONE_SUPPORTED", {
        get: function () { return 4; },
        enumerable: true,
        configurable: true
    });
    return MediaError;
}());
exports.MediaError = MediaError;
//# sourceMappingURL=media.js.map