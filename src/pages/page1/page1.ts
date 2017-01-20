import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
	
	aboutbutton = AboutPage;

  constructor(public navCtrl: NavController) {
    
  }

}
