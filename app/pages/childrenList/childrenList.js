import {Page, NavController, Modal} from 'ionic-angular';
import {ChildDashboardPage} from '../childDashboard/childDashboard';
import {AddChildPage} from './addChildPage';
import {ChildService} from '../../services/childService';

@Page({
  templateUrl: 'build/pages/childrenList/index.html'
})
export class ChildrenListPage {
  static get parameters() {
    return [[NavController], [ChildService]];
  }

  constructor(nav, childService) {
    this.nav = nav;
    this.childService = childService;
    childService.getChildren()
      .then((children) => this.children = children);
  }

  navigateToChild(child) {
    this.nav.push(ChildDashboardPage, { child: child });
  }

  addChild() {
    let addModal = Modal.create(AddChildPage);
    addModal.onDismiss((data) => {
      if (data) {
        this.children.push(data);
      }
    });
    this.nav.present(addModal);
  }

  deposit(child) {
    console.log('child', child);
    child.balance += parseFloat(child.factor);
  }

  withdraw(child) {
    child.balance -= parseFloat(child.factor);
  }

  editTasks(child) {
    console.log('task ', child);
  }

  editMoney(child) {
    console.log('money ', child);
  }
}
