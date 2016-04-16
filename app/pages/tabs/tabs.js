import {Page} from 'ionic-angular';
import {ChildrenListPage} from '../childrenList/childrenList';
import {NotificationsPage} from '../notifications/notifications';
import {SettingsPage} from '../settings/settings';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.childrenList = ChildrenListPage;
    this.notifications = NotificationsPage;
    this.settings = SettingsPage;
  }
}
