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
    this.amount = 10;
    this.child.balance = this.child.balance ? parseFloat(this.child.balance) : 0;
    console.log('params', params, this.child);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  deposit(child, amount) {
    child.balance += amount;
    this.viewCtrl.dismiss();
  }
  
  withdraw(child, amount) {
    child.balance -= amount;
    this.viewCtrl.dismiss();
  }
}
