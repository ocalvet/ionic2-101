import {Page, NavController} from 'ionic-angular';
import {NotificationService} from '../../services/notificationService';
import {DBService} from '../../services/dbService';

@Page({
  templateUrl: 'build/pages/notifications/index.html'
})
export class NotificationsPage {
  static get parameters() {
    return [[NavController], [NotificationService], [DBService]];
  }

  constructor(nav, notificationService, dbService) {
    this.nav = nav;
    this.notificationService = notificationService;
    this.notificationService.getNotifications()
      .then((notifications) => this.notifications = notifications);
    this.dbService = dbService;
    this.dbService.getDocuments()
      .then((docs) => this.docs = docs);
  }
}
