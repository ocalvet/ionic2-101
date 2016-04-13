import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  constructor() {
    this.children = [{
      name: "Ovidio R. Calvet",
      avatar: "img/avatar.png",
      balance: 5,
      totalTasks: 10,
      completedTasks: 5
    }]
  }
}
