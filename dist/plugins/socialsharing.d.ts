/**
 * @name Social Sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 * @usage
 * ```js
 * import {SocialSharing} from 'ionic-native';
 *
 * ...
 * // TODO add usage info
 * ```
 */
export declare class SocialSharing {
    /**
     * Shares using the share sheet
     * @param message {string} The message you would like to share.
     * @param subject {string} The subject
     * @param file {string|Array<string>} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
     * @param url {string} A URL to share
     */
    static share(message?: string, subject?: string, file?: string | Array<string>, url?: string): void;
    /**
     * Checks if you can share via a specific app.
     * @param appName App name or package name. Examples: instagram or com.apple.social.facebook
     */
    static canShareVia(appName: string): Promise<any>;
    /**
     * Shares directly to Twitter
     * @param message
     * @param image
     * @param url
     */
    static shareViaTwitter(message: string, image?: string, url?: string): void;
    /**
     * Shares directly to Facebook
     * @param message {string}
     * @param image {string}
     * @param url {string}
     */
    static shareViaFacebook(message: string, image?: string, url?: string): Promise<any>;
    /**
     * Shares directly to Facebook with a paste message hint
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @param pasteMessageHint {string}
     */
    static shareViaFacebookWithPasteMessageHint(message: string, image?: string, url?: string, pasteMessageHint?: string): Promise<any>;
    /**
     * Shares directly to Instagram
     * @param message {string}
     * @param image {string}
     */
    static shareViaInstagram(message: string, image: string): Promise<any>;
    /**
     * Shares directly to WhatsApp
     * @param message {string}
     * @param image {string}
     * @param url {string}
     */
    static shareViaWhatsApp(message: string, image?: string, url?: string): Promise<any>;
    /**
     * Shares directly to a WhatsApp Contact
     * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
     * @param message {string} Message to send
     * @param image {string} Image to send (does not work on iOS
     * @param url {string} Link to send
     */
    static shareViaWhatsAppToReceiver(receiver: string, message: string, image?: string, url?: string): Promise<any>;
    /**
     * Share via SMS
     * @param messge {string} message to send
     * @param phoneNumber {string} Number or multiple numbers seperated by commas
     */
    static shareViaSMS(messge: string, phoneNumber: string): Promise<any>;
    /**
     * Share via Email
     * @param message {string}
     * @param subject {string}
     * @param to {Array<string>}
     * @param cc {Array<string>}
     * @param bcc {Array<string>}
     * @param files {string|Array<string>} URL or local path to file(s) to attach
     */
    static shareViaEmail(message: string, subject: string, to: Array<string>, cc: Array<string>, bcc: Array<string>, files: string | Array<string>): Promise<any>;
}
