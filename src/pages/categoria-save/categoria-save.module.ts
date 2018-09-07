import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaSavePage } from './categoria-save';

@NgModule({
  declarations: [
    CategoriaSavePage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaSavePage),
  ],
})
export class CategoriaSavePageModule {}
