import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../../services/auth.service';

/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {}
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
	console.log ('okemantap');
  }

}
