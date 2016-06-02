import {Plugin, Cordova, CordovaProperty} from './plugin';
import {Observable} from 'rxjs/Observable';

declare var navigator: any;

@Plugin({
  plugin: 'com.thlsoft.sbox.invitefriends',
  platforms: ['Android'],
  pluginRef: 'invite'
})

export class SBoxInviteFriends {
    @Cordova()
    static inviteFriends(groupId: string) : Promise<any> { return; }
}
