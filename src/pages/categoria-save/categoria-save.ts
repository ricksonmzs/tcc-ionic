import { Categoria } from './../../models/categoria';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { ForumServiceProvider } from './../../providers/forum.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the CategoriaSavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria-save',
  templateUrl: 'categoria-save.html',
})
export class CategoriaSavePage {

  categoria: Categoria;
  nome:string;
  private loading;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    private forumService: ForumServiceProvider,
    public toastController: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaSavePage');
  }

  public save() {
    this.loading = this.loadingController.create();
    this.loading.present();
    this.forumService.addCategoria(this.categoria).subscribe(resp => {
      this.categoria = resp as Categoria;
      console.log(JSON.stringify(resp));
      this.loading.dismiss();
    }, (err: HttpErrorResponse) => {
      console.error(String(err.status) + '----------' + err.statusText);
      this.loading.dismiss();
    });
  }
}
