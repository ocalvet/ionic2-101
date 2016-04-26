import {Page, NavController, Modal} from 'ionic-angular';
import {AddChildModalPage} from '../../modals/addChildModal/addChildModalPage';

@Page({
  templateUrl: 'build/pages/settings/index.html'
})
export class SettingsPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
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
