import {CompanyModel} from './models/company.model';
import {ToHtml} from './utils/to-html';
import * as $ from 'jquery';
import { CompanyRepository } from './models/company-repository';
/**ok
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */
// Instancier un repository de CompanyModel

const companyRepository: CompanyRepository = new CompanyRepository();

 // Créer une instance de la classe CompanyModel
 const aelion: CompanyModel = new CompanyModel (1);
 aelion.setName(' Aélion')

 // Création d'une autre instance de classe \' pour mettre un ' dans le mot sinon crois que c'est la fin de la chaine new company model...
 //... c'est la construction d'un objet(=l'instance de clasee) a partir du plan (=la classe)

 const cap: CompanyModel = new CompanyModel (2);
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

// Ajoute cap et aelion dans le repository
companyRepository.add(cap);
companyRepository.add(aelion);

// Essayer de changer l id d aeloion impossible controle par le setId()
aelion.setId(1)

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