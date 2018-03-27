import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbAppProvider } from '../../providers/db-app/db-app';
import { SQLiteObject } from '@ionic-native/sqlite';
import { ContatosPage } from '../contatos/contatos';

/**
 * Generated class for the ContatosCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contatos-create',
  templateUrl: 'contatos-create.html',
})
export class ContatosCreatePage {

  name = '';
  email = '';
  telefone = '';
  operadora_id = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dbProvider: DbAppProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosCreatePage');
  }

  create(){

    this.dbProvider.getSQLiteInstance().then( (db: SQLiteObject) => {
      
      db.executeSql('INSERT INTO contatos (name,email,telefone,operadora_id) VALUES (?,?,?,?)',[
        this.name,this.email,this.telefone,this.operadora_id
      ]).then( () => {
        this.navCtrl.push(ContatosPage)
      }).catch( (errors) => { 
        console.log(errors.message)
      } )
    }) 
  }
}
