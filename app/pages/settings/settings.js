import {Page, NavController, Modal} from 'ionic-angular';
import {AddChildModalPage} from '../../modals/addChildModal/addChildModalPage';
import {SettingsService} from '../../services/settingsService';

@Page({
  templateUrl: 'build/pages/settings/index.html'
})
export class SettingsPage {
  static get parameters() {
    return [[NavController], [SettingsService]];
  }

  constructor(nav, settingsService) {
    this.nav = nav;
    settingsService.getSettings()
      .then((settings) => {
        this.settings = settings;
        console.log('settings - ', settings);
      });
  }

  addChild() {
    let addModal = Modal.create(AddChildModalPage);
    addModal.onDismiss((data) => {
      if (data) {
        console.log('new child', data);
        // this.children.push(data);
      }
    });
    this.nav.present(addModal);
  }
}
