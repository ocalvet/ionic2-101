import {Page, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/childDashboard/index.html'
})

export class ChildDashboardPage {

  static get parameters() {
    return [[NavParams]];
  }

  constructor(navParams) {
    this.child = navParams.get('child');
    console.log('params', this.child)
  }
}
