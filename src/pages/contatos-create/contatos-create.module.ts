import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatosCreatePage } from './contatos-create';

@NgModule({
  declarations: [
    ContatosCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ContatosCreatePage),
  ],
})
export class ContatosCreatePageModule {}
