import {Page} from 'ionic-angular';
import {ChildrenListPage} from '../childrenList/childrenList';
import {Page2} from '../page2/page2';
import {SettingsPage} from '../settings/settings';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.childrenListPage = ChildrenListPage;
    this.tab2Root = Page2;
    this.settings = SettingsPage;
  }
}
