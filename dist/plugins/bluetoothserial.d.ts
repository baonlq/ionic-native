import { Observable } from 'rxjs/Observable';
/**
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.
 * @usage
 */
export declare class BluetoothSerial {
    /**
     * Connect to a Bluetooth device
     * Returns an Observable. Subscribe to connect, unsubscribe to disconnect.
     * @param macAddress_or_uuid Identifier of the remote device
     */
    static connect(macAddress_or_uuid: string): Observable<any>;
    /**
     * Connect insecurely to a Bluetooth device
     * Returns an Observable. Subscribe to connect, unsubscribe to disconnect.
     * @param macAddress Identifier of the remote device
     */
    static connectInsecure(macAddress: string): Observable<any>;
    /**
     * Writes data to the serial port
     * @param data ArrayBuffer of data
     * @usage
     * ```ts
     * // Write a string
     * Bluetooth.write("hello world").then(success, failure);
     *
     * // Array of int or bytes
     * Bluetooth.write([186, 220, 222]).then(success, failure);
     *
     * // Typed Array
     * var data = new Uint8Array(4);
     * data[0] = 0x41;
     * data[1] = 0x42;
     * data[2] = 0x43;
     * data[3] = 0x44;
     * Bluetooth.write(data).then(success, failure);
     *
     * // Array Buffer
     * Bluetooth.write(data.buffer).then(success, failure);
     * ```
     */
    static write(data: any): Promise<any>;
    /**
     * Gets the number of bytes of data available
     */
    static available(): Promise<any>;
    /**
     * Reads data from the buffer
     */
    static read(): Promise<any>;
    /**
     * Reads data from the buffer until it reaches a delimiter
     * @param delimiter
     */
    static readUntil(delimiter: string): Promise<any>;
    /**
     * Subscribe to be notified when data is received
     * @param delimiter
     */
    static subscribe(delimiter: string): Observable<any>;
    /**
     * Subscribe to be notified when data is received
     */
    static subscribeRawData(): Observable<any>;
    /**
     * Clears data in buffer
     */
    static clear(): Promise<any>;
    /**
     * Lists bonded devices
     */
    static list(): Promise<any>;
    /**
     * Reports if bluetooth is enabled
     */
    static isEnabled(): Promise<any>;
    /**
     * Reports the connection status
     */
    static isConnected(): Promise<any>;
    /**
     * Reads the RSSI from the connected peripheral
     */
    static readRSSI(): Promise<any>;
    /**
     * Show the Bluetooth settings on the device
     */
    static showBluetoothSettings(): Promise<any>;
    /**
     * Enable Bluetooth on the device
     */
    static enable(): Promise<any>;
    /**
     * Discover unpaired devices
     * @usage
     * ```ts
     * [{
     *    "class": 276,
     *    "id": "10:BF:48:CB:00:00",
     *    "address": "10:BF:48:CB:00:00",
     *    "name": "Nexus 7"
     * }, {
     *    "class": 7936,
     *    "id": "00:06:66:4D:00:00",
     *    "address": "00:06:66:4D:00:00",
     *    "name": "RN42"
     * }]
     * ```
     */
    static discoverUnpaired(): Promise<any>;
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     */
    static setDeviceDiscoveredListener(): Observable<any>;
    /**
     * Sets the human readable device name that is broadcasted to other devices
     * @param newName Desired name of device
     */
    static setName(newName: string): void;
    /**
     * Makes the device discoverable by other devices
     * @param discoverableDuration Desired number of seconds device should be discoverable for
     */
    static setDiscoverable(discoverableDuration: number): void;
}
