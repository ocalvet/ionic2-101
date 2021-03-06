import {Page, NavController, Modal} from 'ionic-angular';
import {ChildDashboardPage} from '../childDashboard/childDashboard';
import {AddChildModalPage} from '../../modals/addChildModal/addChildModalPage';
import {ChildService} from '../../services/childService';
import {SettingsService} from '../../services/settingsService';
import {DepositModalPage} from '../../modals/depositModal/depositModalPage';
import {TaskModalPage} from '../../modals/taskModal/taskModalPage';

@Page({
  templateUrl: 'build/pages/childrenList/index.html'
})
export class ChildrenListPage {
  static get parameters() {
    return [[NavController], [ChildService], [SettingsService]];
  }

  constructor(nav, childService, settingsService) {
    this.nav = nav;
    this.childService = childService;

    // Get application settings
    settingsService
      .getSettings()
      .then((settings) => {
        console.log('settings', settings);
        this.settings = settings
      });

    // Get application settings
    childService
      .getChildren()
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
    taskModal.onDismiss((task) => {
      let foundTask = child.tasks.filter((t) => t.id === task.id)[0];
      foundTask.completed = !task.completed;
      console.log('found task', foundTask, task);
    })
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
