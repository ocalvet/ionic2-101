import {Page, NavController, ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/childrenList/add.html'
})
export class AddChildPage {

  static get parameters() {
    return [[NavController], [ViewController]];
  }

  constructor(nav, viewCtrl) {
    this.nav = nav;
    this.viewCtrl = viewCtrl;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
