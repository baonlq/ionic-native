/**
 * @name Vibration
 * @description Vibrates the device
 * @usage
 * ```ts
 * import {Vibration} from 'ionic-native';
 *
 *
 *
 * // Vibrate the device for a second
 * Vibration.vibrate(1000);
 *
 * // Vibrate 2 seconds
 * // Pause for 1 second
 * // Vibrate for 2 seconds
 * // Patterns work on Android and Windows only
 * Vibration.vibrate([2000,1000,2000]);
 *
 * // Stop any current vibrations immediately
 * // Works on Android and Windows only
 * Vibration.vibrate(0);
 * ```
 */
export declare class Vibration {
    /**
     * Vibrates the device for given amount of time.
     * @param time {Number|Array<Number>} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
     */
    static vibrate(time: any): void;
}
