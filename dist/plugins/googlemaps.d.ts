import { Observable } from 'rxjs/Observable';
/**
 * @name Google Maps
 */
export declare class GoogleMaps {
    private _objectInstance;
    constructor(elementId: string);
    static onInit(): Observable<GoogleMaps>;
    setDebuggable(isDebuggable: boolean): void;
    setClickable(isClickable: boolean): void;
}
