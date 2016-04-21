import {Page, NavController, ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/modals/depositModal/index.html'
})
export class DepositModalPage {

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

  deposit(amount) {
    this.child.balance = this.child.balance || 0;
    this.child.balance += amount;
    console.log('Depositing to child', this.child);
  }
}
