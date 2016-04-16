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
    this.child = {
      totalTasks: 0,
      completedTasks: 0
    };
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  add() {
    this.viewCtrl.dismiss(this.child);
  }
}
