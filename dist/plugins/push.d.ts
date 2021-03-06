export declare type EventResponse = RegistrationEventResponse | NotificationEventResponse | Error;
export interface RegistrationEventResponse {
    /**
     * The registration ID provided by the 3rd party remote push service.
     */
    registrationId: string;
}
export interface NotificationEventResponse {
    /**
     * The text of the push message sent from the 3rd party service.
     */
    message: string;
    /**
     * The optional title of the push message sent from the 3rd party service.
     */
    title?: string;
    /**
     * The number of messages to be displayed in the badge iOS or message count in the notification shade in Android.
     * For windows, it represents the value in the badge notification which could be a number or a status glyph.
     */
    count: string;
    /**
     * The name of the sound file to be played upon receipt of the notification.
     */
    sound: string;
    /**
     * The path of the image file to be displayed in the notification.
     */
    image: string;
    /**
     * An optional collection of data sent by the 3rd party push service that does not fit in the above properties.
     */
    additionalData: NotificationEventAdditionalData;
}
/**
 * TODO: document all possible properties (not just Android)
 *
 * Loosened up with a dictionary notation, but all non-defined properties need to use (map['prop']) notation
 *
 * Ideally the developer would overload (merged declaration) this or create a new interface that would extend this one
 * so that he could specify any custom code without having to use array notation (map['prop']) for all of them.
 */
export interface NotificationEventAdditionalData {
    [name: string]: any;
    /**
     * Whether the notification was received while the app was in the foreground
     */
    foreground?: boolean;
    collapse_key?: string;
    from?: string;
    notId?: string;
}
export interface PushNotification {
    /**
     * The event registration will be triggered on each successful registration with the 3rd party push service.
     * @param event
     * @param callback
     */
    on(event: "registration", callback: (response: RegistrationEventResponse) => any): void;
    /**
     * The event notification will be triggered each time a push notification is received by a 3rd party push service on the device.
     * @param event
     * @param callback
     */
    on(event: "notification", callback: (response: NotificationEventResponse) => any): void;
    /**
     * The event error will trigger when an internal error occurs and the cache is aborted.
     * @param event
     * @param callback
     */
    on(event: "error", callback: (response: Error) => any): void;
    /**
     *
     * @param event Name of the event to listen to. See below(above) for all the event names.
     * @param callback is called when the event is triggered.
     * @param event
     * @param callback
     */
    on(event: string, callback: (response: EventResponse) => any): void;
    off(event: "registration", callback: (response: RegistrationEventResponse) => any): void;
    off(event: "notification", callback: (response: NotificationEventResponse) => any): void;
    off(event: "error", callback: (response: Error) => any): void;
    /**
     * As stated in the example, you will have to store your event handler if you are planning to remove it.
     * @param event Name of the event type. The possible event names are the same as for the push.on function.
     * @param callback handle to the function to get removed.
     * @param event
     * @param callback
     */
    off(event: string, callback: (response: EventResponse) => any): void;
    /**
     * The unregister method is used when the application no longer wants to receive push notifications.
     * Beware that this cleans up all event handlers previously registered,
     * so you will need to re-register them if you want them to function again without an application reload.
     * @param successHandler
     * @param errorHandler
     */
    unregister(successHandler: () => any, errorHandler?: () => any): void;
    /**
     * Set the badge count visible when the app is not running
     *
     * The count is an integer indicating what number should show up in the badge.
     * Passing 0 will clear the badge.
     * Each notification event contains a data.count value which can be used to set the badge to correct number.
     * @param successHandler
     * @param errorHandler
     * @param count
     */
    setApplicationIconBadgeNumber(successHandler: () => any, errorHandler: () => any, count?: number): void;
    /**
     * Get the current badge count visible when the app is not running
     * successHandler gets called with an integer which is the current badge count
     * @param successHandler
     * @param errorHandler
     */
    getApplicationIconBadgeNumber(successHandler: (count: number) => any, errorHandler: () => any): void;
    /**
     * iOS only
     * Tells the OS that you are done processing a background push notification.
     * successHandler gets called when background push processing is successfully completed.
     * @param successHandler
     * @param errorHandler
     */
    finish(successHandler: () => any, errorHandler: () => any): void;
}
export interface IOSPushOptions {
    /**
     * Maps to the project number in the Google Developer Console. Setting this
     * uses GCM for notifications instead of native.
     */
    senderID?: string;
    /**
     * Whether to use prod or sandbox GCM setting.
     */
    gcmSandbox?: boolean | string;
    /**
     * If true the device shows an alert on receipt of notification.
     * **Note**: the value you set this option to the first time you call the init
     * method will be how the application always acts. Once this is set
     * programmatically in the init method it can only be changed manually by the
     * user in Settings>Notifications>App Name. This is normal iOS behaviour.
     */
    alert?: boolean | string;
    /**
     * If true the device sets the badge number on receipt of notification.
     * **Note**: the value you set this option to the first time you call the init
     * method will be how the application always acts. Once this is set
     * programmatically in the init method it can only be changed manually by the
     * user in Settings>Notifications>App Name. This is normal iOS behaviour.
     */
    badge?: boolean | string;
    /**
     * If true the device plays a sound on receipt of notification.
     * **Note**: the value you set this option to the first time you call the init
     * method will be how the application always acts. Once this is set
     * programmatically in the init method it can only be changed manually by the
     * user in Settings>Notifications>App Name. This is normal iOS behaviour.
     */
    sound?: boolean | string;
    /**
     * If true the badge will be cleared on app startup.
     */
    clearBadge?: boolean | string;
    /**
     * If the array contains one or more strings each string will be used to
     * subscribe to a GcmPubSub topic.
     * **Note**: only usable in conjunction with `senderID`.
     */
    topics?: string[];
}
export interface AndroidPushOptions {
    /**
     * Maps to the project number in the Google Developer Console.
     */
    senderID: string;
    /**
     * The name of a drawable resource to use as the small-icon. The name should
     * not include the extension.
     */
    icon?: string;
    /**
     * Sets the background color of the small icon on Android 5.0 and greater.
     * [Supported Formats](http://developer.android.com/intl/ru/reference/android/graphics/Color.html#parseColor(java.lang.String))
     */
    iconColor?: string;
    /**
     * If true it plays the sound specified in the push data or the default system
     * sound.
     */
    sound?: boolean | string;
    /**
     * If true the device vibrates on receipt of notification.
     */
    vibrate?: boolean | string;
    /**
     * If true the app clears all pending notifications when it is closed.
     */
    clearNotifications?: boolean | string;
    /**
     * If true will always show a notification, even when the app is on the
     * foreground.
     */
    forceShow?: boolean | string;
    /**
     * If the array contains one or more strings each string will be used to
     * subscribe to a GcmPubSub topic.
     */
    topics?: string[];
}
export interface PushOptions {
    ios?: IOSPushOptions;
    android?: AndroidPushOptions;
    windows?: {};
}
/**
 * @name Push
 * @description
 * Register and receive push notifications.
 *
 * Requires Cordova plugin: `phonegap-plugin-push`. For more info, please see the [Push plugin docs](https://github.com/phonegap/phonegap-plugin-push).
 *
 * For TypeScript users, see the [Push plugin docs about using TypeScript for custom notifications](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md).
 *
 * @usage
 * ```js
 * import {Push} from 'ionic-native';
 *
 *
 *
 * ```
 */
export declare class Push {
    /**
     * Initialize the plugin on the native side.
     *
     * ```
     * var push = Push.init({
     *    android: {
     *        senderID: "12345679"
     *    },
     *    ios: {
     *        alert: "true",
     *        badge: true,
     *        sound: 'false'
     *    },
     *    windows: {}
     * });
     * ```
     *
     * @param {PushOptions} options  The Push [options](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#parameters).
     * @return {PushNotification}  Returns a new [PushNotification](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#pushonevent-callback) object.
     */
    static init(options: PushOptions): PushNotification;
    /**
     * Check whether the push notification permission has been granted.
     * @return {Promise} Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
     */
    static hasPermission(): Promise<{
        isEnabled: boolean;
    }>;
}
