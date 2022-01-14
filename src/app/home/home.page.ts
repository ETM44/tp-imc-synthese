import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  poids:string = '';
  taille:string = '';
  etat:string = 'inconnu';
  couleur:string = 'white';
  imc:number = 0;

  constructor() {}

  onEtatImcCouleur(){
    if(this.poids.length == 0 || this.taille.length == 0){
      this.etat = 'inconnu';
      this.couleur = 'white';
    } else {
      this.imc = parseFloat((parseFloat(this.poids) / (parseFloat(this.taille)*parseFloat(this.taille))).toFixed(1));

      if(isNaN(this.imc) || !isFinite(this.imc)){
        this.etat = 'inconnu';
        this.couleur = 'white';
      } else {
        if(this.imc > 25) {
          this.etat = 'surpoids';
          this.couleur = 'danger';
        } else if(this.imc < 18.5) {
          this.etat = 'maigreur';
          this.couleur = 'warning';
        } else {
          this.etat = 'normal';
          this.couleur = 'success';
        }
      }
    }
  }

  onTitreIMC(){
    if(this.poids.length == 0 || this.taille.length == 0){
      return '';
    }

    return 'IMC: ' + this.imc;
  }
  onCommentaireIMC(){
    if(this.poids.length == 0 || this.taille.length == 0){
      return '';
    } 

    if(this.imc > 25) {
      let poidsAPerdre = ((this.imc - 21.75) * (parseFloat(this.taille)*parseFloat(this.taille))).toFixed(1); 
      return 'Vous êtes en surpoids, vous devez perdre ' + poidsAPerdre + ' kg'
    } else if(this.imc < 18.5) {
      let poidsAGagner = ((21.75 - this.imc) * (parseFloat(this.taille)*parseFloat(this.taille))).toFixed(1); 
      return 'Vous êtes en maigreur, vous devez gagner ' + poidsAGagner + ' kg'
    } else {
      if(this.imc > 21.75) {
        let poidsAPerdre = ((this.imc - 21.75) * (parseFloat(this.taille)*parseFloat(this.taille))).toFixed(1); 
        return 'Vous avez un poids normal, cependant vous pouvez perdre ' + poidsAPerdre + ' kg'
      } else if(this.imc < 21.75) {
        let poidsAGagner = ((21.75 - this.imc) * (parseFloat(this.taille)*parseFloat(this.taille))).toFixed(1); 
        return 'Vous avez un poids normal, cependant vous pouvez gagner ' + poidsAGagner + ' kg'
      }
    }
    
  }
}
