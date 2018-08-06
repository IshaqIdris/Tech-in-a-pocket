import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {EmergencyPage} from '../emergency/emergency'
import { CategoriesPage } from '../categories/categories';
import { FavouritesPage } from '../favourites/favourites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoriesPage;
  tab3Root = FavouritesPage;
  tab4Root = EmergencyPage;

  constructor() {

  }
}
