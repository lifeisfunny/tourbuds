import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactlistPage } from './contactlist-page';

@NgModule({
  declarations: [
    ContactlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactlistPage),
  ],
  exports: [
    ContactlistPage
  ]
})
export class ContactlistPageModule {}
