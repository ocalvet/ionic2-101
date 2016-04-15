import {Page} from 'ionic-angular';
import {ChildrenListPage} from '../childrenListPage/childrenListPage';
import {Page2} from '../page2/page2';
import {Page4} from '../page4/page4';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.childrenListPage = ChildrenListPage;
    this.tab2Root = Page2;
    this.tab4Root = Page4;
  }
}
