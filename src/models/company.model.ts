export class CompanyModel {
    private name: string;
    private adress: string;
    private codePostal: string;
    private ville: string;
    private id: number;

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
        return this.getId;
    }
    public setId(id:number){
        // My logic here: do not accept two same idea === comparaison de valeur et de type = pour affectation == comparer valeur à defaut utiliser le triple
        if (this.id == null){
            this.id = id;
        }
    }
///Format HTML
    public toString(): string {
        let output: string = '<div class="col-12">';
        output += '<h2><i class="icon-office"></i>' + this.name + '</h2>';
        output += '<i class="icon-location"></i>' + this.adress + '<br>';
        output += this.codePostal + ' <em>' + this.ville + '</em><br><br></div>';
        return output;
    }
}
