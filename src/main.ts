import {CompanyModel} from './models/company.model';
import {ToHtml} from './utils/to-html';
import * as $ from 'jquery';
import { CompanyRepository } from './models/company-repository';
import { NameStrategy } from './models/strategies/name-strategies';
import { AllStrategy } from './models/strategies/all-strategies';
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
 aelion.setName(' Aélion');

 // Création d'une autre instance de classe \' pour mettre un ' dans le mot sinon crois que c'est la fin de la chaine new company model...
 //... c'est la construction d'un objet(=l'instance de clasee) a partir du plan (=la classe)

 const cap: CompanyModel = new CompanyModel (2);
 cap.setName(' Cap\'Gemini');
 // pour vérifier console.log on peut lancer l'index puis la console dans firefox

 // on donne les valeurs pour l'objet aelion
aelion.setStrategy(new AllStrategy());
aelion.setAdress('95 chemin de Gabardie');
aelion.setCodePostal('31000');
aelion.setville ('Toulouse');

 // on donne les valeurs pour l'objet aelion
cap.setAdress('94 chemin Einshower');
cap.setCodePostal('31000');
cap.setville ('Toulouse');

// Ajoute cap et aelion dans le repository
companyRepository.add(cap);
companyRepository.add(aelion);

// Essayer de changer l id d aeloion impossible controle par le setId()
aelion.setId(1)

// Pour controle
console.log ('Nombre de sociétés: ' + companyRepository.getSize());

// envoyer les infos dans la page web
const toHtml: ToHtml = new ToHtml();

// methode append to page qui appartient a l objet html
toHtml.appendToPage(aelion.useOutputStrategy());
toHtml.appendToPage(cap.useOutputStrategy());
// Ecouter le clic dans le document le .cliclick signifie va chercher dans le doc les éclément dont l'attribut classe est clic. Queryselector prend seulement le premier element