import {CompanyModel} from './models/company.model';
import {ToHtml} from './utils/to-html';
import * as $ from 'jquery';
import { CompanyRepository } from './models/company-repository';
import { NameStrategy } from './models/strategies/name-strategies';
import { AllStrategy } from './models/strategies/all-strategies';
import { Carre } from './geometrie/carre';
import { Cercle } from './geometrie/cercle';
import { Triangle } from './geometrie/triangle';
import { Table } from './geometrie/table';
import { Paintable } from './geometrie/paintable-interface';
import { Catalog } from './vehicules/catalogue-repository';
import { VehiculeFactory } from './vehicules/vehicule-factory';
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

// Illustration des classes héritéges interfaces
//On fait des instance (objet) de la classe, d'abord on importe la classe définissant le carré qu'on range instance grandCarre construite à partir de la classe carré
// Carre c'est la classe (dans tous les cas dans la console il y aura marqué dans la console je suis un carré) grandCarre c'est l'objet on créer un nouvelle objet dans la classe
const grandCarre: Carre = new Carre();
grandCarre.dessiner();

const unAutreGrandCarre: Carre = new Carre();

// je veux comparer les deux carrés
if (grandCarre.compareTo(unAutreGrandCarre)===0) {
    console.log ('Les deux carrés sont identiques');
} else {
    console.log ('Les deux carrés sont différents')
}

const petitCarre: Carre = new Carre();
// demande de recalibre la machine a 50
petitCarre.setSideLength(50);
petitCarre.dessiner();

const jeSUisUnCercle: Carre = new Carre();
// demande de faire des carré de 100
jeSUisUnCercle.setSideLength(100);
jeSUisUnCercle.dessiner();

//JE demande a faire des cercles de 75
const dalleCirculaire75: Cercle = new Cercle();
dalleCirculaire75.setDiametre(75);
dalleCirculaire75.dessiner();

// Je demande de faire des triangles de 40
const dalleTriangulaire: Triangle = new Triangle();
dalleTriangulaire.setKind('Equilatéral');
dalleTriangulaire.dessiner();

const laTable: Table = new Table(100,100);

// J'envoie le chariot avec les trucs a peindre
const toCabine: Array<Paintable> = new Array();
toCabine.push(grandCarre);
toCabine.push(petitCarre);
toCabine.push(jeSUisUnCercle);
toCabine.push(dalleCirculaire75);
toCabine.push(dalleTriangulaire);
toCabine.push(laTable);

// Vas y let s paint it back pour chaque objet stocke dans la variable tocabine applique la peinture
toCabine.forEach((object: any) => {
    object.paint('red');
}
);
 // Usine à véhicules
 const catalogue: Catalog = new Catalog();
 catalogue
 .add(
     (VehiculeFactory.createVehicule('Voiture', '208'))
        .setSalePrice(15000)
        .setManufacturingPrice(5000)
 )
 .add(
    (VehiculeFactory.createVehicule('Voiture', '308'))
        .setSalePrice(23000)
        .setManufacturingPrice(5500)   
 )
 .add(
    (VehiculeFactory.createVehicule('Moto', 'Varadero'))
    .setSalePrice(5000)
    .setManufacturingPrice(1500)
 );
 console.log(catalogue.catalogue());
 console.log('Marge totale : ' + catalogue.getMargeTotale());