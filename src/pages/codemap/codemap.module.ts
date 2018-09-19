import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodemapPage } from './codemap';

@NgModule({
  declarations: [
    CodemapPage,
  ],
  imports: [
    IonicPageModule.forChild(CodemapPage),
  ],
})
export class CodemapPageModule {}
