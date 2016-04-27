import {Page, NavController} from 'ionic-angular';
import {NotificationService} from '../../services/notificationService';

@Page({
  templateUrl: 'build/pages/notifications/index.html'
})
export class NotificationsPage {
  static get parameters() {
    return [[NavController], [NotificationService]];
  }

  constructor(nav, notificationService) {
    console.log('not. srvc', nav, notificationService);
    this.nav = nav;
    this.notificationService = notificationService;
    this.notificationService.getNotifications()
      .then((notifications) => this.notifications = notifications);
  }
}
