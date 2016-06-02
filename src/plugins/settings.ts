import {Plugin, Cordova, CordovaProperty} from './plugin';
import {Observable} from 'rxjs/Observable';

declare var navigator: any;

@Plugin({
  plugin: 'com.phonegap.plugins.nativesettingsopener',
  repo: 'https://github.com/selahssea/Cordova-open-native-settings',
  platforms: ['iOS', 'Android'],
  pluginRef: 'cordova.plugins.settings'
})

export class NativeSettings {
    @Cordova()
    static open() : Promise<any> { return; }

    @Cordova({
        callbackOrder: 'reverse'
    })
    static openSetting(settingName: string) : Promise<any> { return; }

    @Cordova()
    static openWifiSetting() : Promise<any> {return;}
}
