import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DbAppProvider } from '../../providers/db-app/db-app';


/**
 * Generated class for the ContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {

  contatos: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private dbProvider: DbAppProvider
  ) {
    this.dbProvider.createDatabase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosPage');

      this.dbProvider.getSQLiteInstance().then( (db: SQLiteObject) => {
        
        db.executeSql('SELECT * FROM contatos',[]).then( (resultSet) => {
          // let $rows = resultSet.rows;

          for (let i = 0; i < resultSet.rows.length; i++) {
            console.log(resultSet.rows.item(i))
            this.contatos.push(resultSet.rows.item(i));
          }
        }).catch( (error) => console.log(error) )
      }) 
  }

}
