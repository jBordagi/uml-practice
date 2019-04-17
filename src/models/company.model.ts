import { OutputInterface } from "../utils/output-interface";
import { AllStrategy } from "./strategies/all-strategies";

export class CompanyModel {
    private name: string;
    private adress: string;
    private codePostal: string;
    private ville: string;
    private id: number;

// nouvelle attribut dont le type est le nom de l'interface OutputInterface
    private strategy: OutputInterface<CompanyModel> = new AllStrategy();

    // method constructor appelle automatiquement a la construction d un objet place directement l'id
    public constructor(id: number){
    this.id = id;
    }

    // "this" c'est l'instance courante de la classe, l'objet soit aélion soit cap
    public setName(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name.toUpperCase();
    }
    public getAdress(): string{
        return this.adress;
    }
    public setAdress (adress:string){
        this.adress = adress;
    }
    public getCodePostal(): string{
        return this.codePostal;
    }
    public setCodePostal(codePostal: string) {
        this.codePostal = codePostal;
    }
    public getville(): string{
        return this.ville;
    }
    public setville(ville:string){
        this.ville = ville;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id:number){
        // My logic here: do not accept two same idea === comparaison de valeur et de type = pour affectation == comparer valeur à defaut utiliser le triple
        if (this.id == null){
            this.id = id;
        }
    } 
// methode specifie la strategie a utiliser
    public setStrategy(strategy:OutputInterface<CompanyModel>){
        this.strategy= strategy;
    }
// va me chercher la strategie d'affichage de output definie par la strategie
    public useOutputStrategy(): JQuery {
        return this.strategy.output(this);
    }
///Format HTML
    public toString(howTo:number): string {
        let output: string;
        if (howTo==1) {
            output ='<div class="col-12 click" data-rel="' + this.id + '">';
            output += '<h2><i class="icon-office"></i>' + this.name + '</h2>';
            output += '<i class="icon-location"></i>' + this.adress + '<br>';
            output += this.codePostal + ' <em>' + this.ville + '</em><br><br></div>';
        } else if (howTo==2) {
            output = '<h2><i class="icon-office"></i>' + this.name + '</h2>';
        } else if (howTo==3) {
            output='<h2><i class="icon-office"></i>' + this.name + ' ' + this.codePostal + '</h2>'
        }
            
            return output;
        }

}
