export class CompanyModel {
    private name: string;
    private adress: string;
    private codePostal: string;
    private ville: string;

    public setName(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
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
///Format HTML
    public toString(): string {
        let output: string = '<div class="col-12">';
        output += '<h2><i class="icon-office"></i>' + this.name + '</h2>';
        output += '<i class="icon-location"></i>' + this.adress + '<br>';
        output += this.codePostal + ' <em>' + this.ville + '</em><br><br></div>';
        return output;
    }
}
