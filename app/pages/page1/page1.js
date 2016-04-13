import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  constructor() {
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
    console.log('Navigating to ', child);
  }
}
