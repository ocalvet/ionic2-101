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
    this.child = {};
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  add() {
    let child = {
      name: this.child.name,
      balance: this.child.balance ? parseFloat(this.child.balance) : 0,
      totalTasks: 0,
      avatar: "img/avatar.png",
      completedTasks: 0
    }
    this.viewCtrl.dismiss(child);
  }
}
