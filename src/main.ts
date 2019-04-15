import {CompanyModel} from './models/company.model';
import {ToHtml} from './utils/to-html';

import * as $ from 'jquery';
/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

 // Créer une instance de la classe CompanyModel
 const aelion: CompanyModel = new CompanyModel ();
 aelion.setName(' Aélion')

 // Création d'une autre instance de classe \' pour mettre un ' dans le mot sinon crois que c'est la fin de la chaine

 const cap: CompanyModel = new CompanyModel ();
 cap.setName(' Cap\'Gemini');
 // pour vérifier console.log on peut lancer l'index puis la console dans firefox

 // on donne les valeurs pour l'objet aelion
aelion.setAdress('95 chemin de Gabardie')
aelion.setCodePostal('31000')
aelion.setville ('Toulouse')

 // on donne les valeurs pour l'objet aelion
cap.setAdress('94 chemin Einshower')
cap.setCodePostal('31000')
cap.setville ('Toulouse')

// En une ligne pour un objet
console.log ('Objet Aélion:' + aelion.getName() + ' ' + aelion.getAdress()+ ' ' + aelion.getCodePostal() + ' ' + aelion.getville());
console.log ('Objet Cap\'Gemini:' + cap.getName() + ' ' + cap.getAdress()+ ' ' + cap.getCodePostal() + ' ' + cap.getville());

// envoyer les infos dans la page web
const toHtml: ToHtml = new ToHtml();
toHtml.toPage(cap);
toHtml.toPage(aelion);

// Ecouter le clic dans le document le .cliclick signifie va chercher dans le doc les éclément dont l'attribut classe est clic. Queryselector prend seulement le premier element

const laDiv: any = document.querySelector('.click')
laDiv.addEventListener(
    "click",
    () => {
        alert('Merci...');
    }
);