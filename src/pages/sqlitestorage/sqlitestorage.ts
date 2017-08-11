import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

// natife compomment
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
const DATABASE_FILE_NAME: string = 'data.db';

@Component({
  selector: 'sqlitestorage',
  templateUrl: 'sqlitestorage.html'
})
export class SqliteStoragePage {
  private db: SQLiteObject;
  private titleMovie: string;
  private ratingMovie: string;
  private descriptionMovie: string;
  private categorieMovie: string;
  private movies: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, public alertCtrl: AlertController) {
    this.createDatabaseFile();
  }
  private createDatabaseFile(): void {
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        alert('bdd cree');
        this.db = db;
        this.createTable();
      })
      .catch(e => console.log(e));
  }

  private createTable(): void {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `movies` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL, `eval` INTEGER NOT NULL, `decs` TEXT, `categories_idcategories` INTEGER, FOREIGN KEY(`categories_idcategories`) REFERENCES `id` )', {})
      .then(() => {
        alert('table movie cree');

        this.db.executeSql('CREATE TABLE IF NOT EXISTS `categories` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` INTEGER )', {})
          .then(() => alert('table categoris creee'))
          .catch(e => alert(e));
      })
      .catch(e => console.log(e));

    //insert into `categories` (name) values ('test') 
    //insert into movies (name,eval,desc,categories_idcategories) values ('nom film',3,'description',1)
  }
  public saveMyFilm() {
    this.db.executeSql('insert into movies (name,eval,desc,categories_idcategories) values (\'' + this.titleMovie + '\',\'' + this.ratingMovie + '\',\'' + this.descriptionMovie + '\',last_insert_rowid())', {})
      .then(() => {
        alert(' movie nsert');
        this.db.executeSql('insert into `categories` (name) values (\'' + this.categorieMovie + '\')', {})
          .then(() => alert('categoris created'))
          .catch(e => alert(e));
      })
      .catch(e => console.log(e));
  }

  public retriveFilm() {
    this.movies = [];
    this.db.executeSql('select name from `movies`', {})
      .then((data) => {
        if (data == null) {
          return;
        }
        if (data.rows) {
          if (data.rows.length > 0) {
            for (var i = 0; i < data.rows.length; i++) {
              this.movies.push(data.rows.item(i).name);
            }
          }
        }
      })
      .catch(e => console.log(e));
  }
}
