import {Page, NavController, ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/modals/taskModal/index.html'
})
export class TaskModalPage {

  static get parameters() {
    return [[NavController], [ViewController]];
  }

  constructor(nav, viewCtrl) {
    this.nav = nav;
    this.viewCtrl = viewCtrl;
    this.child = {};
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
