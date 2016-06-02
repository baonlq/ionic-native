import {Plugin, Cordova} from './plugin';

@Plugin({
  plugin: 'com.thlsoft.sbox.notificationpusher',
  platforms: ['Android'],
  pluginRef: 'pusher'
})

export class PusherInit {
    @Cordova()
    static getCurrentInstallation() : Promise<any> { return; }
}
