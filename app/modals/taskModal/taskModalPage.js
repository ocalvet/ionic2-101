import {Page, NavController, ViewController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/modals/taskModal/index.html'
})
export class TaskModalPage {

  static get parameters() {
    return [[NavController], [ViewController], [NavParams]];
  }

  constructor(nav, viewCtrl, params) {
    this.nav = nav;
    this.viewCtrl = viewCtrl;
    this.child = params.get('child');
  }

  taskMarked(task){
    this.viewCtrl.dismiss(task);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
