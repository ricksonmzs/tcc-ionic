import { CategoriaSavePage } from './../categoria-save/categoria-save';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Categoria } from '../../models/categoria';
import { ForumServiceProvider } from '../../providers/forum.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  // categoriaSavePage = CategoriaSavePage;
  public categoria: Categoria[] = [];
  private loading;

  constructor(public navCtrl: NavController,
    public loadingController: LoadingController,
    private forumService: ForumServiceProvider,
    public toastController: ToastController) {

  }

  ngOnInit() {
    this.loading = this.loadingController.create();
    this.carregarCategorias();
  }

  public carregarCategorias() {

    this.loading.present();
    
    this.forumService.categorias().subscribe(resp => {
      this.categoria = resp;
      console.log(JSON.stringify(resp));
      this.loading.dismiss();
    }, (err: HttpErrorResponse) => {
      console.error(String(err.status) + '----------' + err.statusText);
      this.loading.dismiss();
    });
  }

  openCategoriaSave(){
    this.navCtrl.push(CategoriaSavePage);
  }

}
