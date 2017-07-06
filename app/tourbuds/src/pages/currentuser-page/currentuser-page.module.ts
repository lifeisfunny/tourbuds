import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentuserPage } from './currentuser-page';

@NgModule({
  declarations: [
    CurrentuserPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentuserPage),
  ],
  exports: [
    CurrentuserPage
  ]
})
export class CurrentuserPageModule {}
