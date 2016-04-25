import {Page, NavController, ViewController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/modals/depositModal/index.html'
})
export class DepositModalPage {

  static get parameters() {
    return [[NavController], [ViewController], [NavParams]];
  }

  constructor(nav, viewCtrl, params) {
    this.nav = nav;
    this.viewCtrl = viewCtrl;
    this.child = params.get('child');
    this.depositAmount = 10;
    console.log('params', params, this.child);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  deposit(child, amount) {
    console.log('Child deposit', child, amount);
    child.balance = child.balance || 0;
    child.balance += amount;
    this.viewCtrl.dismiss();
  }
}
