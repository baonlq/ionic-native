"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng1_1 = require('./ng1');
ng1_1.initAngular1();
var DEVICE_READY_TIMEOUT = 2000;
var actionsheet_1 = require('./plugins/actionsheet');
exports.ActionSheet = actionsheet_1.ActionSheet;
var admob_1 = require('./plugins/admob');
exports.AdMob = admob_1.AdMob;
var appavailability_1 = require('./plugins/appavailability');
exports.AppAvailability = appavailability_1.AppAvailability;
var apprate_1 = require('./plugins/apprate');
exports.AppRate = apprate_1.AppRate;
var appversion_1 = require('./plugins/appversion');
exports.AppVersion = appversion_1.AppVersion;
var badge_1 = require('./plugins/badge');
exports.Badge = badge_1.Badge;
var barcodescanner_1 = require('./plugins/barcodescanner');
exports.BarcodeScanner = barcodescanner_1.BarcodeScanner;
var base64togallery_1 = require('./plugins/base64togallery');
exports.Base64ToGallery = base64togallery_1.Base64ToGallery;
var batterystatus_1 = require('./plugins/batterystatus');
exports.BatteryStatus = batterystatus_1.BatteryStatus;
var ble_1 = require('./plugins/ble');
exports.BLE = ble_1.BLE;
var bluetoothserial_1 = require('./plugins/bluetoothserial');
exports.BluetoothSerial = bluetoothserial_1.BluetoothSerial;
var calendar_1 = require('./plugins/calendar');
exports.Calendar = calendar_1.Calendar;
var camera_1 = require('./plugins/camera');
exports.Camera = camera_1.Camera;
var clipboard_1 = require('./plugins/clipboard');
exports.Clipboard = clipboard_1.Clipboard;
var contacts_1 = require('./plugins/contacts');
exports.Contacts = contacts_1.Contacts;
var datepicker_1 = require('./plugins/datepicker');
exports.DatePicker = datepicker_1.DatePicker;
var dbmeter_1 = require('./plugins/dbmeter');
exports.DBMeter = dbmeter_1.DBMeter;
var device_1 = require('./plugins/device');
exports.Device = device_1.Device;
var deviceaccounts_1 = require('./plugins/deviceaccounts');
exports.DeviceAccounts = deviceaccounts_1.DeviceAccounts;
var devicemotion_1 = require('./plugins/devicemotion');
exports.DeviceMotion = devicemotion_1.DeviceMotion;
var deviceorientation_1 = require('./plugins/deviceorientation');
exports.DeviceOrientation = deviceorientation_1.DeviceOrientation;
var diagnostic_1 = require('./plugins/diagnostic');
exports.Diagnostic = diagnostic_1.Diagnostic;
var dialogs_1 = require('./plugins/dialogs');
exports.Dialogs = dialogs_1.Dialogs;
var emailcomposer_1 = require('./plugins/emailcomposer');
exports.EmailComposer = emailcomposer_1.EmailComposer;
var facebook_1 = require('./plugins/facebook');
exports.Facebook = facebook_1.Facebook;
var file_1 = require('./plugins/file');
exports.File = file_1.File;
var flashlight_1 = require('./plugins/flashlight');
exports.Flashlight = flashlight_1.Flashlight;
var geolocation_1 = require('./plugins/geolocation');
exports.Geolocation = geolocation_1.Geolocation;
var globalization_1 = require('./plugins/globalization');
exports.Globalization = globalization_1.Globalization;
var googlemaps_1 = require('./plugins/googlemaps');
exports.GoogleMaps = googlemaps_1.GoogleMaps;
var googleanalytics_1 = require('./plugins/googleanalytics');
exports.GoogleAnalytics = googleanalytics_1.GoogleAnalytics;
var hotspot_1 = require('./plugins/hotspot');
exports.Hotspot = hotspot_1.Hotspot;
var imagepicker_1 = require('./plugins/imagepicker');
exports.ImagePicker = imagepicker_1.ImagePicker;
var inappbrowser_1 = require('./plugins/inappbrowser');
exports.InAppBrowser = inappbrowser_1.InAppBrowser;
var insomnia_1 = require('./plugins/insomnia');
exports.Insomnia = insomnia_1.Insomnia;
var keyboard_1 = require('./plugins/keyboard');
exports.Keyboard = keyboard_1.Keyboard;
var launchnavigator_1 = require('./plugins/launchnavigator');
exports.LaunchNavigator = launchnavigator_1.LaunchNavigator;
var localnotifications_1 = require('./plugins/localnotifications');
exports.LocalNotifications = localnotifications_1.LocalNotifications;
var media_1 = require('./plugins/media');
exports.MediaPlugin = media_1.MediaPlugin;
var network_1 = require('./plugins/network');
exports.Network = network_1.Network;
exports.Connection = network_1.Connection;
var push_1 = require('./plugins/push');
exports.Push = push_1.Push;
var screenshot_1 = require('./plugins/screenshot');
exports.Screenshot = screenshot_1.Screenshot;
var sms_1 = require('./plugins/sms');
exports.SMS = sms_1.SMS;
var socialsharing_1 = require('./plugins/socialsharing');
exports.SocialSharing = socialsharing_1.SocialSharing;
var spinnerdialog_1 = require('./plugins/spinnerdialog');
exports.SpinnerDialog = spinnerdialog_1.SpinnerDialog;
var splashscreen_1 = require('./plugins/splashscreen');
exports.Splashscreen = splashscreen_1.Splashscreen;
var sqlite_1 = require('./plugins/sqlite');
exports.SQLite = sqlite_1.SQLite;
var statusbar_1 = require('./plugins/statusbar');
exports.StatusBar = statusbar_1.StatusBar;
var toast_1 = require('./plugins/toast');
exports.Toast = toast_1.Toast;
var touchid_1 = require('./plugins/touchid');
exports.TouchID = touchid_1.TouchID;
var vibration_1 = require('./plugins/vibration');
exports.Vibration = vibration_1.Vibration;
var webintent_1 = require('./plugins/webintent');
exports.WebIntent = webintent_1.WebIntent;
var settings_1 = require('./plugins/settings');
exports.NativeSettings = settings_1.NativeSettings;
var pushnotification_1 = require('./plugins/pushnotification');
exports.PusherInit = pushnotification_1.PusherInit;
var sboxinvitefriends_1 = require('./plugins/sboxinvitefriends');
exports.SBoxInviteFriends = sboxinvitefriends_1.SBoxInviteFriends;
__export(require('./plugins/plugin'));
// Window export to use outside of a module loading system
window['IonicNative'] = {
    ActionSheet: actionsheet_1.ActionSheet,
    AdMob: admob_1.AdMob,
    AppAvailability: appavailability_1.AppAvailability,
    AppRate: apprate_1.AppRate,
    AppVersion: appversion_1.AppVersion,
    Badge: badge_1.Badge,
    BarcodeScanner: barcodescanner_1.BarcodeScanner,
    Base64ToGallery: base64togallery_1.Base64ToGallery,
    BatteryStatus: batterystatus_1.BatteryStatus,
    BLE: ble_1.BLE,
    BluetoothSerial: bluetoothserial_1.BluetoothSerial,
    Calendar: calendar_1.Calendar,
    Camera: camera_1.Camera,
    Clipboard: clipboard_1.Clipboard,
    Connection: network_1.Connection,
    Contacts: contacts_1.Contacts,
    DatePicker: datepicker_1.DatePicker,
    DBMeter: dbmeter_1.DBMeter,
    Device: device_1.Device,
    DeviceAccounts: deviceaccounts_1.DeviceAccounts,
    DeviceMotion: devicemotion_1.DeviceMotion,
    DeviceOrientation: deviceorientation_1.DeviceOrientation,
    Dialogs: dialogs_1.Dialogs,
    Diagnostic: diagnostic_1.Diagnostic,
    EmailComposer: emailcomposer_1.EmailComposer,
    Facebook: facebook_1.Facebook,
    File: file_1.File,
    Flashlight: flashlight_1.Flashlight,
    Geolocation: geolocation_1.Geolocation,
    Globalization: globalization_1.Globalization,
    GoogleMaps: googlemaps_1.GoogleMaps,
    GoogleAnalytics: googleanalytics_1.GoogleAnalytics,
    Hotspot: hotspot_1.Hotspot,
    ImagePicker: imagepicker_1.ImagePicker,
    InAppBrowser: inappbrowser_1.InAppBrowser,
    Keyboard: keyboard_1.Keyboard,
    LaunchNavigator: launchnavigator_1.LaunchNavigator,
    LocalNotifications: localnotifications_1.LocalNotifications,
    MediaPlugin: media_1.MediaPlugin,
    Network: network_1.Network,
    Push: push_1.Push,
    Screenshot: screenshot_1.Screenshot,
    SMS: sms_1.SMS,
    SocialSharing: socialsharing_1.SocialSharing,
    SpinnerDialog: spinnerdialog_1.SpinnerDialog,
    Splashscreen: splashscreen_1.Splashscreen,
    SQLite: sqlite_1.SQLite,
    StatusBar: statusbar_1.StatusBar,
    Toast: toast_1.Toast,
    TouchID: touchid_1.TouchID,
    Vibration: vibration_1.Vibration,
    WebIntent: webintent_1.WebIntent,
    NativeSettings: settings_1.NativeSettings,
    PusherInit: pushnotification_1.PusherInit,
    SBoxInviteFriends: sboxinvitefriends_1.SBoxInviteFriends
};
// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
var before = +new Date;
var didFireReady = false;
document.addEventListener('deviceready', function () {
    console.log('DEVICE READY FIRED AFTER', (+new Date - before), 'ms');
    didFireReady = true;
});
setTimeout(function () {
    if (!didFireReady && window.cordova) {
        console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
    }
}, DEVICE_READY_TIMEOUT);
//# sourceMappingURL=index.js.map