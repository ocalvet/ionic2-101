import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/notifications/index.html'
})
export class NotificationsPage {
  constructor() {
    this.notifications = [{
      title: "Sample Notification",
      description: "Child just completed task 'some task'"
    }];
    console.log('notifications', this.notifications);
  }
}
