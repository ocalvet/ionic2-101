import {Page, NavController} from 'ionic-angular';
import {ChildDashboardPage} from '../childDashboard/childDashboard';

@Page({
  templateUrl: 'build/pages/childrenListPage/index.html'
})
export class ChildrenListPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.children = [{
      name: "Ovidio Calvet",
      avatar: "img/avatar.png",
      balance: 5,
      totalTasks: 10,
      completedTasks: 5
    },{
      name: "Jonathan Calvet",
      avatar: "img/avatar.png",
      balance: 62.5,
      totalTasks: 4,
      completedTasks: 2
    }]
  }
  navigateToChild(child) {
    console.log('Navigating to ', child, this.nav);
    this.nav.push(ChildDashboardPage, { child: child });
  }
  addChild() {
    console.log("Adding child...");
  }
}
