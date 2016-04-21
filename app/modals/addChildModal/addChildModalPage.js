import {Page, NavController, ViewController} from 'ionic-angular';
import {ChildService} from '../../services/childService';

@Page({
  templateUrl: 'build/modals/addChildModal/index.html'
})
export class AddChildModalPage {

  static get parameters() {
    return [[NavController], [ViewController], [ChildService]];
  }

  constructor(nav, viewCtrl, childService) {
    this.nav = nav;
    this.childService = childService;
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
    
    // Use the childService to persist the child
    this.childService.addChild(child)
      .then(
        (c) => this.viewCtrl.dismiss(c), 
        (error) => console.log('There was an error saving the new child', error)
      );
  }
}
