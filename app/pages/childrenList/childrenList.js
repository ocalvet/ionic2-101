import {Page, NavController, Modal} from 'ionic-angular';
import {ChildDashboardPage} from '../childDashboard/childDashboard';
import {AddChildModalPage} from '../../modals/addChildModal/addChildModalPage';
import {ChildService} from '../../services/childService';
import {DepositModalPage} from '../../modals/depositModal/depositModalPage';
import {TaskModalPage} from '../../modals/taskModal/taskModalPage';

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
    let addModal = Modal.create(AddChildModalPage);
    addModal.onDismiss((data) => {
      if (data) {
        this.children.push(data);
      }
    });
    this.nav.present(addModal);
  }

  showDeppositModal(child) {
    let depositModal = Modal.create(DepositModalPage, { child: child });
    this.nav.present(depositModal);
  }

  showTaskModal(child) {
    let taskModal = Modal.create(TaskModalPage, { child: child });
    this.nav.present(taskModal);
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
