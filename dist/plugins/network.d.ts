import { Observable } from 'rxjs/Observable';
/**
 * @name Network
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```js
 * import {Network, Connection} from 'ionic-native';
 *
 * // watch network for a disconnect
 * let disconnectSubscription = Network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-( ')
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = Network.onConnect().subscribe(() => {
 *   console.log('network connected!');
*
 *   // We just got a connection but we need to wait briefly
 *
// before we determine the connection type.  Might need to wait

 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     console.log(Network.connection);
 *     if (Network.connection === Connection.WIFI) {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 */
export declare class Network {
    /**
     * Return the network connection type
     */
    static connection: Connection;
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    static onDisconnect(): Observable<any>;
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    static onConnect(): Observable<any>;
}
export declare class Connection {
    static UNKNOWN: string;
    static ETHERNET: string;
    static WIFI: string;
    static CELL_2G: string;
    static CELL_3G: string;
    static CELL_4G: string;
    static CELL: string;
    static NONE: string;
}
