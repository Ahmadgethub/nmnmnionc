import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

// import { CodemapPage } from '../codemap/codemap';
// import { CodefriendmapPage } from '../codefriendmap/codefriendmap';
  


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab2Root = CodemapPage;
  // tab3Root = CodefriendmapPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
