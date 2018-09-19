import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BagmapPage } from './bagmap';

@NgModule({
  declarations: [
    BagmapPage,
  ],
  imports: [
    IonicPageModule.forChild(BagmapPage),
  ],
})
export class BagmapPageModule {}
